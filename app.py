#Import needed stuff
from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from os import environ
import pymongo

#Build App
app = Flask(__name__)

# #Configure - CHANGE
# app.config['MONGO_URI'] = environ.get('MONGODB_URI', 'mongodb+srv://admin:us_eventing@cluster0.sycdc.mongodb.net/test')

# #Initalize Mongo CLient
# mongo = PyMongo(app)


# Routes - render templates
@app.route('/')
def index():
    return render_template('index.html')

# Individual Page Routes
# form
@app.route('/form')
def form():
    return render_template('form.html')

# vis1
@app.route('/vis1')
def vis1():
    return render_template('vis1.html')

# vis2
@app.route('/vis2')
def vis2():
    return render_template('vis2.html')

# vis2
@app.route('/vis3')
def vis3():
    return render_template('vis3.html')

# # data
# @app.route('/datafilter')
# def datafilter():
#     return render_template('datafilter.html')

# # heatmao
# @app.route('/heatmap')
# def heatmap():
#     return render_template('heatmap.html')

if __name__ == '__main__':
    app.run(debug=True)

