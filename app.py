#Import needed stuff
from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from os import environ
import pymongo

#Build App
app = Flask(__name__)

#Configure - CHANGE
app.config['MONGO_URI'] = environ.get('MONGODB_URI', 'mongodb+srv://admin:Aliens2@cluster0.d3dkn.mongodb.net/AliensAll?retryWrites=true&w=majority')

#Initalize Mongo CLient
mongo = PyMongo(app)

#URL - CHANGFE
def scrape_info():
#Mars Image JPL Scrape
    url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    browser.visit(url)
    browser.click_link_by_partial_text("FULL IMAGE")
    time.sleep(10)
    browser.click_link_by_partial_text("more info")
    html = browser.html
    soup = bs(html, 'html.parser')  
    #pic = soup.find("img",)["src"]
    #featured_image_url = "https://www.jpl.nasa.gov" + image
    sub_img = soup.find( "figure", class_="lede")
    name=sub_img.a["href"]
    featured_image='https://www.jpl.nasa.gov'+ name