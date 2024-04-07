from flask import Flask, request, jsonify
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('agg') 
import io
import pandas as pd
import base64
from cleaning import *
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, supports_credentials=True)

api_v1_cors_config = (
    "origins": ["https://frontend-qvy22s8kt-bryan-chos-projects.vercel.app/","https://vercel.com/bryan-chos-projects/frontend/AkkuNfWqbHynRgFRB3P2jqB86i8v"]
)

app.config['CLEAN_DF'] = getDF()
app.config['CORS_HEADERS']='Content-Type'

# Enable CORS for all routes
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/')
def index():
    return 'Welcome to the backend!'

@app.route('/generate_plot', methods=['POST'])
@cross_origin()
def generate_plot():
    # Get data from frontend
    json = request.json
    # expecting the data to come in with category tag
    category = json.get('category')

    # Process data (you can use Pandas for data manipulation)
    df = app.config['CLEAN_DF']
    # Generate plot (using Matplotlib)
    plot_dino_len(category,df)

    # Save the plot to a temporary file or in-memory buffer
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    plot_base64 = base64.b64encode(buffer.read()).decode('utf-8')
    plt.close()
    # Return the plot as response
    return jsonify({'plot': plot_base64})

if __name__ == '__main__':
    app.run(port=8000,debug=True)
