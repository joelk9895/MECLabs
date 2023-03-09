from flask import Flask,request, jsonify


app = Flask(__name__)

@app.route('/active', methods=['GET'])
def home():
    data = {
        "name": "Netflix",
        "price": 30,
        "logo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

    }
    if request.method == 'GET':
        return jsonify(data)

if __name__ == '__main__':
  app.run(debug = True)