import os
import json
import logging

from flask_restful import Resource, reqparse

from models import ItemModel


class Item(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('image',
                        type=str,
                        )
    parser.add_argument('description',
                        type=str,
                        required=True,
                        help='This field cannot be left blank!'
                        )
    parser.add_argument('specifications',
                        type=dict,
                        action='append'
                        )

    def post(self, name):
        data = Item.parser.parse_args()
        data['name'] = name

        if ItemModel.find_by_name(name):
            print("test 123")
            return {'message': f'Item {name} already exist'}, 400

        item = ItemModel(**data)
        item.save_to_db()
        return json.loads(item.to_json()), 201

    # def delete(self, name):
    #     data = Item.parser.parse_args()
    #     data['name'] = name
    #     if not ItemModel.find_by_name(name):
    #         print('deleted!')
    #         return {'message': f'item {name} deleted'}, 400

    #     item = ItemModel(**data)
    #     item.delete_from_db()
    #     return 'Item deleted!',  400

    def put(self, name):
        data = Item.parser.parse_args()
        data['name'] = name

        if ItemModel.find_by_name(name):
            ItemModel.find_by_name(name).update(**data)
            print('Exist you can put it')
            return {'message': f' {name} edited this item'}, 400


class ItemList(Resource):

    def get(self):
        items = list(
            map(
                lambda x: json.loads(x.to_json()),
                ItemModel.objects())
        )
        return {'items': items}
