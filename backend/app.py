from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

@app.route('/api/data')
def get_data():
    return jsonify({"message": "This is data from the server"})

if __name__ == '__main__':
    app.run(port=5001)