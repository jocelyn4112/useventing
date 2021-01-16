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

#URL - CHANGFE
# def scrape_info():
# #Mars Image JPL Scrape
#     url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
#     browser.visit(url)
#     browser.click_link_by_partial_text("FULL IMAGE")
#     time.sleep(10)
#     browser.click_link_by_partial_text("more info")
#     html = browser.html
#     soup = bs(html, 'html.parser')  
#     #pic = soup.find("img",)["src"]
#     #featured_image_url = "https://www.jpl.nasa.gov" + image
#     sub_img = soup.find( "figure", class_="lede")
#     name=sub_img.a["href"]
#     featured_image='https://www.jpl.nasa.gov'+ name

    const puppeteer = require('puppeteer');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const {url} = req.query;
    if(!url) {
        res.status(400).send("Bad request: 'url' param is missing!");
        return;
    }

    try {
        const html = await getPageHTML(url);

        res.status(200).send(html);
    } catch (error) {
        res.status(500).send(error);
    }
});

const getPageHTML = async (pageUrl) => {
    const browser = await puppeteer.launch();
  
    const page = await browser.newPage();
  
    await page.goto(pageUrl);
  
    const pageHTML = await page.evaluate('new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML');
  
    await browser.close();
  
    return pageHTML;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

