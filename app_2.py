import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.express as px

# Make a reference to thecsv file path
csv_path = "try.csv"

# Import the books.csv file as a DataFrame
df = pd.read_csv(csv_path)
df.dropna(inplace = True) 

app = dash.Dash(__name__)

app.layout = html.Div([
    dcc.Graph(id="scatter-plot"),
    html.P("Dress Score:"),
    dcc.RangeSlider(
        id='range-slider',
        min=0, max=2.5, step=0.1,
        marks={0: '0', 2.5: '2.5'},
        value=[0.5, 2]
    ),
])

@app.callback(
    Output("scatter-plot", "figure"), 
    [Input("range-slider", "value")])
def update_bar_chart(slider_range):
    low, high = slider_range
    mask = (df['Dress Score'] > low) & (df['Dress Score'] < high)
    fig = px.scatter(
        df[mask], x="Dress Score", y="Final Score", 
        color="Final Place", size='Final Place', 
        hover_data=['Final Place'])
    return fig

app.run_server(debug=True)