from db import db


class ItemModel(db.Document):
    name = db.StringField(required=True)
    image = db.URLField()
    description = db.StringField(required=True)
    specifications = db.ListField(db.DictField())

    @classmethod
    def find_by_name(cls, name):
        item = ItemModel.objects(name=name)
        if item:
            return ItemModel.objects.get(name=name)

    def save_to_db(self):
        self.save()

    def update_db(self, name):
        self.update()

    def delete_from_db(self):
        self.delete()
