from ipaddress import IPv4Address, AddressValueError
import random
from flask import jsonify, render_template, request, send_from_directory, make_response
from ptnaudc import app

@app.errorhandler(404)
def error_404(e):
    return (
        jsonify({
            "action": "GT_OBWE_U",
            "result": None,
            "error": {
                "name": "PATH_NOT_FOUND",
                "description": "The requested path was not found."
                }
            }),
        404,
    )

@app.errorhandler(500)
def error_500(e):
    return (
        jsonify({
            "action": None,
            "result": None,
            "error": {
                "name": "INTERNAL_SERVER_ERROR",
                "description": "An error occurred while processing the request. That's really fricking bad!"
                }
            }),
        500,
    )

def getIPAddress(request: request) -> IPv4Address:
    try:
        return IPv4Address(request.headers.get("x-vprw-internal-hostip"))
    except AddressValueError:
        print("Invalid IP address: " + request.headers.get("x-vprw-internal-hostip"))
        try:
            return IPv4Address(request.headers.get("x-vprw-internal-hostip").split(", ")[0])
        except AddressValueError:
            print("Failed second time to get IP address: " + request.headers.get("x-vprw-internal-hostip"))
            try:
                return IPv4Address(request.remote_addr)
            except AddressValueError:
                print("Frick - no IP address found!")
                return IPv4Address("0.0.0.0")
        except AttributeError:
            print("Frick - no IP address found at first!")
            return IPv4Address("0.0.0.0")

@app.route("/")
def main_root():
    return render_template("index.html", userIPAddress=getIPAddress(request))

def generateValuesForJavaScriptAnimation(ipAddress: IPv4Address) -> dict[str, str]:
    _ics = ["" if value == " " else value for value in str(ipAddress).center(15, " ")]
    return {
        "p1": _ics[0],
        "p2": _ics[1],
        "p3": _ics[2],
        "p4": _ics[3],
        "p5": _ics[4],
        "p6": _ics[5],
        "p7": _ics[6],
        "p8": _ics[7],
        "p9": _ics[8],
        "p10": _ics[9],
        "p11": _ics[10],
        "p12": _ics[11],
        "p13": _ics[12],
        "p14": _ics[13],
        "p15": _ics[14],
        "bu1": round(random.uniform(1.1, 1.5), 2),
        "bu2": round(random.uniform(1.1, 1.5), 2),
        "bu3": round(random.uniform(1.1, 1.5), 2),
        "bu4": round(random.uniform(1.2, 1.4), 2),
        "bu5": round(random.uniform(1.2, 1.4), 2),
        "bu6": round(random.uniform(1.3, 1.5), 2),
        "bu7": round(random.uniform(1.3, 1.5), 2),
        "bu8": round(random.uniform(1.3, 1.7), 2),
        "bu9": round(random.uniform(1.3, 1.7), 2),
        "bu10": round(random.uniform(1.3, 1.5), 2),
        "bu11": round(random.uniform(1.3, 1.5), 2),
        "bu12": round(random.uniform(1.3, 1.5), 2),
        "bu13": round(random.uniform(1.2, 1.5), 2),
        "bu14": round(random.uniform(1.2, 1.5), 2),
        "bu15": round(random.uniform(1.2, 1.5), 2)
        }

@app.route("/hype/ptnaudc-apia-hr.hyperesources/ptnaudc-apia-hr-genscr.js")
def all_deez():
    response = make_response(render_template("ptnaudc-apia-hr-genscr.js", **generateValuesForJavaScriptAnimation(IPv4Address(getIPAddress(request)))))
    response.headers["Content-Type"] = "application/javascript; charset=utf-8"
    return response

@app.route("/hype/<path:path>")
def send_report(path):
    return send_from_directory("ptnaudc/static/other", path)
