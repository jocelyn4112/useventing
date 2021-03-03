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

# data
@app.route('/map')
def map():
    return render_template('map.html')

# # heatmao
# @app.route('/heatmap')
# def heatmap():
#     return render_template('heatmap.html')

if __name__ == '__main__':
    app.run(debug=True)
#Dash 3
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd


external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

df = pd.read_csv('final_df_3'
fig = px.scatter(df, x="Dress Score", y="Final Score",
                 size="Difficulty", color="Difficulty", hover_name="country",
                 log_x=True, size_max=60)

app.layout = html.Div([
    dcc.Graph(
        id='life-exp-vs-gdp',
        figure=fig
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
#Dash 2
import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.graph_objects as go

app = dash.Dash(__name__)

app.layout = html.Div([
    html.P("Color:"),
    dcc.Dropdown(
        id="dropdown",
        options=[
            {'label': x, 'value': x}
            for x in ['Gold', 'MediumTurquoise', 'LightGreen']
        ],
        value='Gold',
        clearable=False,
    ),
    dcc.Graph(id="graph"),
])

@app.callback(
    Output("graph", "figure"), 
    [Input("dropdown", "value")])
def display_color(color):
    fig = go.Figure(
        data=go.Bar(y=[2, 3, 1], marker_color=color))
    return fig

app.run_server(debug=True)