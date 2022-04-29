from flask import Flask
import logging

app = Flask("web-ping_thats_a_nice_argument_unfortunately_com", template_folder="ptnaudc/templates")

from ptnaudc import views
