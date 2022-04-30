from flask import Flask
import os
import logging
import pymongo

app = Flask("web-ping_thats_a_nice_argument_unfortunately_com", template_folder="ptnaudc/templates")
__db = pymongo.MongoClient(os.getenv("MONGODB_URI"))
cll = __db.get_database("ptnaudc").get_collection("ips")

from ptnaudc import views
