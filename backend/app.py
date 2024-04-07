# app.py

from flask import Flask, request, jsonify
import matplotlib.pyplot as plt
import io
import pandas as pd
import base64
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/')
def index():
    return 'Welcome to the Flask backend!'

@app.route('/generate_plot', methods=['POST'])
@cross_origin() 
def generate_plot():
    # Get data from frontend
    data = request.json
    return jsonify({'plot': 1})

    # Process data (you can use Pandas for data manipulation)
    df = pd.DataFrame({'dataValue': [17.0, 25.0], 'Column2': [1,2]}, index=['Portland', 'Berkeley'])
    # Here, we assume 'data' contains the necessary information for plotting

    # Generate plot (using Matplotlib or Plotly)
    df.plot(kind='barh')
    plt.ylabel('some numbers')

    # Save the plot to a temporary file or in-memory buffer
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    plot_base64 = base64.b64encode(buffer.read()).decode('utf-8')
    plt.close()
    # Return the plot as response

@app.route('/test',method=['GET'])
@cross_origin()
def returnTest():
    return jsonify({'data':1})

if __name__ == '__main__':
    app.run(debug=True)
