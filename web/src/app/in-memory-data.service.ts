import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products=
    [
      {
        id: 1,
        name: 'Coffee Bean',
        description: 'The best coffee bean with authentic and unique aroma from Sulawesi, Indonesia.  ',
        image:'https://i.ibb.co/VwVDbtC/pic03.jpg',
        specifications: [
            {
              title: 'Production Area',
              detail: 'Toraja;South Sulawesi'
            },
            {
              title: 'Odor',
              detail: 'Odorless'
            },
            {
              title : ' The elevation of cultivation',
              detail : '1.200 - 1.700 ASL'
            }

        ] 
     },

     {
      id: 2,
      name: 'Black Pepper',
      description: 'Authentic black pepper from Indonesia cultivated with care. Commonly used as spices',
      image:'https://i.ibb.co/YdZvfsW/Screen-Shot-2020-07-11-at-9-23-44-PM.png',
      specifications: [
        {title: 'Water Content', 
        detail: '9.17%'},
        {title: 'AKK', 
        detail: '50.000 colony/gr'},
        {title: 'Piperin Content', 
        detail: '3.8'},
        {title: 'Ash Content', 
        detail: '2.7'},
        {title: 'Microbes Content', 
        detail: 'Negative'}
        ]
   },

   {
    id: 3,
    name: 'White Pepper',
    description: 'The best quality of white pepper which has milder taste than Black Pepper. ',
    image:'https://i.ibb.co/RYK59Cy/Screen-Shot-2020-07-11-at-9-24-57-PM.png',
    specifications :[
      {title: 'Water Content', 
      detail: '9.17%'},
      {title: 'AKK', 
      detail: '50.000 colony/gr'},
      {title: 'Piperin Content', 
      detail: '3.8'},
      {title: 'Ash Content', 
      detail: '2.7'},
      {title: 'Microbes Content', 
      detail: 'Negative'}
    ]
 },

 {
  id: 4,
  name: 'Cloves',
  description: 'The Best quality Cloves from Indonesia with strong aromatic flavor and aroma.',
  image:'https://i.ibb.co/HdBgW35/pic04.jpg'
},

{
  id: 5,
  name: 'Red Ginger',
  description: 'The Best quality ginger from Indonesia commonly used as herbal medicine and spices.',
  image:'https://i.ibb.co/RQqH0sj/pic08.png',
  specifications :[
    {title: 'Class', 
    detail: '1'},
    {title: 'Surface (Skin)', 
    detail: 'Smooth & Clean'},
    {title: 'Range of size', 
    detail: '100 - 300 gram'},
    {title: 'Harvest age', 
    detail: '15 Months'},
    {title: 'Packaging', 
    detail: '10 - 10 kg/mesh bag'},
    {title: 'Supply Capability', 
    detail: '1.500 - 3.000 tons/month'}
  ]
}
,

{
  id: 6,
  name: 'Cardamom',
  description: 'The Best quality Cardamom from Indonesia with strong, sweet flavor, and hints of lemon and mint.',
  image:'https://i.ibb.co/LrkGGss/pic06.jpg',
  specifications :[
    {title: 'Water Content', 
    detail: '10%%'},
    {title: 'Sineol Content', 
    detail: '10%'},
    {title: 'Astiri Content', 
    detail: '4%'}
  ]
    
},

{
  id: 7,
  name: 'Cigarette Paper',
  description: 'High quality Cigarette Paper made from organic unbleached cellulose made in West Java, Indonesia.',
  image:'https://i.ibb.co/JCf3hwr/pic07.png',
  specifications: [
    {title: 'Ingredients', 
    detail: 'Organic unbleached (plant & cellulose'},
    {title: 'Size', 
    detail: '88mm - 44mm'},
    {title: 'Weight', 
    detail: '13 gsm'},
    {title: 'Color', 
    detail: 'Light pale brown'},
    {title: 'Taste', 
    detail: 'Bland'},
    {title: 'Content', 
    detail: '450 little box - 800 pcs connes'},
    {title: 'Production', 
    detail: '200.000 - 250.000 pcs/month '}
  ]
  
}


  ];


    return {products}
  }



  constructor() { }
}
