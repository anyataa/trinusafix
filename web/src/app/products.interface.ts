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
  items: {
    name: string;
    image: string;
    description: string;
    specifications: Array<object>;
  };
  data: [object];

}

export interface prod {
  name: string ;
  description : string;
  image: string
  specifications : [{title:string, 
                    detail:string}];
};

export interface name {
  name:string
}
