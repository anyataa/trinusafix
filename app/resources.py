import os
import json
import logging

from flask_restful import Resource, reqparse

from models import ItemModel


class Item(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('name',
                        type=str,
                        required=True
                        )
    parser.add_argument('image',
                        type=str,
                        )
    parser.add_argument('description',
                        type=str,
                        )
    parser.add_argument('specifications',
                        type=dict,
                        action='append'
                        )

    def post(self):
        data = Item.parser.parse_args()
        name = data['name']

        if ItemModel.find_by_name(name):
            return {'message': f'Item {name} already exist'}, 400

        item = ItemModel(**data)
        item.save_to_db()
        return json.loads(item.to_json()), 201

    def put(self):
        data = Item.parser.parse_args()
        name = data['name']

        if ItemModel.find_by_name(name):
            _data = {}
            for key in data:
                if data.get(key):
                    _data[key] = data[key]
                    ItemModel.find_by_name(name).update(**_data)
            return {'message': f'{name} has been edited'}

        item = ItemModel(**data)
        item.save_to_db()
        return json.loads(item.to_json())

    def delete(self):
        data = Item.parser.parse_args()
        name = data['name']

        if ItemModel.find_by_name(name):
            ItemModel.find_by_name(name).delete()
            return {'message': f'{name} has been deleted'}
        return {'message': 'Failed to delete, item not found'}, 400


class ItemList(Resource):

    def get(self):
        items = list(
            map(
                lambda x: json.loads(x.to_json()),
                ItemModel.objects())
        )
        return {'items': items}
