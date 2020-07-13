export interface ProductsSpec {
  specification: string[];
}

export interface ProductsModel {
  _id: object;
  name: string;
  description: string;
  details: string;
}

export interface Items {
  items: any;
  id: string;
  name: string;
  image: string;
  description: string;
  specifications: Array<object>;
}
