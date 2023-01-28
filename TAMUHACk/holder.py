#!/usr/bin/python
import BaseHTTPServer, SimpleHTTPServer
import ssl

httpd = BaseHTTPServer.HTTPServer(('0.0.0.0', 8443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket, certfile='./certs_and_key.pem', server_side=True)
httpd.serve_forever()

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")

def main():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=80 )