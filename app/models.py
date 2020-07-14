from db import db


class ItemModel(db.Document):
    name = db.StringField()
    image = db.URLField()
    description = db.StringField()
    specifications = db.ListField(db.DictField())

    @classmethod
    def find_by_name(cls, name):
        item = ItemModel.objects(name=name)
        if item:
            return ItemModel.objects.get(name=name)

    def save_to_db(self):
        self.save()

    def delete_from_db(self):
        self.delete()
