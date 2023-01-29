from flask import Flask,  render_template, request


app = Flask(__name__)

@app.route("/")
def index1():
    return render_template("index1.html")


@app.route("/", methods=["POST"])

def getValue():
    name = request.form["name"]
    age = request.form["age"]
    dob = request.form["dob"]
    return render_template("pass.html", n=name, age=age, db=dob)

if __name__ == "__main__":
    app.run(debug=True)
    