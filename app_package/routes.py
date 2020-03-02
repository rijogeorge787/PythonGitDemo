from flask import render_template, request
from app_package import app

@app.route("/",methods=["GET"])
def index():
    return render_template("ajax_form.html")
    
@app.route("/",methods=["POSt"])
def calc():
    data=request.get_json()
    v1=float(data["value1"])
    v2=float(data["value2"])
    a=data["action"]
    if a=="add":
        return str(v1+v2)
    elif a=="subtract":
        return str(v1-v2)
    elif a=="multiply":
        return str(v1*v2)
    elif a=="divide":
        return str(v1/v2)
    else:
        return "Invalid operation"
    
