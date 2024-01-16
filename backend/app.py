from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources = r"/*", origins="*")

@app.route('/demo')
def demo():
    data = {
        "message" : "Hello this is a api endpoint"
    }
    return jsonify(data)

if __name__ ==  "__main__":
    app.run(debug=True, host="0.0.0.0" )
