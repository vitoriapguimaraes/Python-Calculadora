from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=['POST'])
def calculate():
    data = request.get_json()

    try:
        number1 = float(data['number1'])
        number2 = float(data['number2'])
        operation = data['operation']
    except (ValueError,KeyError):
        return jsonify({'error': 'Invalid input'}), 400;

    if operation == '+':
        result = number1 + number2
    elif operation == '-':
        result = number1 - number2
    elif operation == '*':
        result = number1 * number2
    elif operation == '/':
        if number2 == 0:
            return jsonify({'error': 'Division by zero is not allowed'}), 400
        result = number1 / number2
    elif operation == '%':
        if number2 == 0:
            return jsonify({'error': 'Division by zero is not allowed'}), 400
        result = f"{number1 * 100 / number2}%"
    else:
        return jsonify({'error': 'Invalid operation'}), 400

    return jsonify({'result': round(result, 3)})

if __name__ == "__main__":
    app.run(debug=True)