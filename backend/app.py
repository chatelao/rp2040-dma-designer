from flask import Flask, request, jsonify
from flask_cors import CORS
from codegen import generate_code

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    code = generate_code(data)
    return jsonify({'code': code})

if __name__ == '__main__':
    app.run(debug=True)
