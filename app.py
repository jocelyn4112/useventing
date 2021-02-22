#Import needed stuff
from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from os import environ
import pymongo

#Build App
app = Flask(__name__)

#Configure - CHANGE
app.config['MONGO_URI'] = environ.get('MONGODB_URI', 'mongodb+srv://admin:us_eventing@cluster0.sycdc.mongodb.net/test')

#Initalize Mongo CLient
mongo = PyMongo(app)


# Routes - render templates
@app.route('/')
def index():
    return render_template('index.html')

# Individual Page Routes
# form
@app.route('/form')
def about():
    return render_template('form.html')

# # analyze
# @app.route('/visualizations')
# def visualizations():
#     return render_template('visualizations.html')

# # explore
# @app.route('/explore')
# def explore():
#     return render_template('explore.html')

# # data
# @app.route('/datafilter')
# def datafilter():
#     return render_template('datafilter.html')

# # heatmao
# @app.route('/heatmap')
# def heatmap():
#     return render_template('heatmap.html')


