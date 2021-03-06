import os
import dotenv
import json
from pathlib import Path

from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from db import db

from resources import Item, ItemList, Delete

dotenv.load_dotenv(Path('app.env'))
app = Flask(__name__)
CORS(app)

app.config['MONGODB_SETTINGS'] = json.loads(os.getenv('MONGODB_SETTINGS'))
# # app.config['CORS_HEADERS'] = 'Content-Type'

db.init_app(app)
api = Api(app)

api.add_resource(Item, '/api/item')
api.add_resource(ItemList, '/api/items')
api.add_resource(Delete, '/api/delete')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9300, debug=True)
