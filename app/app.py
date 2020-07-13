import os
import dotenv
import json
from pathlib import Path

from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from db import db

from resources import Item, ItemList

dotenv.load_dotenv(Path('app.env'))
app = Flask(__name__)
CORS(app)

app.config['MONGODB_SETTINGS'] = json.loads(os.getenv('MONGODB_SETTINGS'))
# app.config['CORS_HEADERS'] = 'Content-Type'

db.init_app(app)
api = Api(app)


api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9300, debug=True)
