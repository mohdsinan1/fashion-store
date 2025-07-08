import cloths from './cloth.jpg';
import footwear from './Footwear.jpg';
import bags from './bags.jpg';
import beauty from './beauty.jpg';

import product_1 from './dress1.jpg'
import product_2 from './dress2.jpg'
import product_3 from  './dress3.jpg'
import product_4 from  './dress4.jpg'
import product_5 from  './dress5.jpg'
import product_6 from  './dress6.jpg'
import product_7 from  './dress7.jpg'
import product_8 from './dress8.webp'
import product_9 from  './dress9.jpg'
import product_10 from  './dress10.webp'
import product_11 from  './dress11.jpg'
import product_12 from './dress12.jpg'
import product_13 from './dress13.jpg'
import product_14 from  './dress14.jpg'
import product_15 from  './dress15.jpg'
import product_16 from  './dress16.webp'
import product_17 from  './dress17.webp'
import product_18 from  './dress18.avif'
import product_19 from  './dress19.jpg'
import product_20 from  './dress20.avif'


import { StaticImageData } from 'next/image';

export type ProductItem = {
    product_name: string;
    product_image: StaticImageData;
};
export type Product = {
    _id: string;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
    category: string;
    stock: number;
    rating: number;
    discount?: number;
  };

export const product_list: ProductItem[] = [
    {
        product_name: "Dresses",
        product_image: cloths
    },
    {
        product_name: "Footwears",
        product_image: footwear
    },
    {
        product_name: "Bags & Accessories",
        product_image: bags
    },
    {
        product_name: "Cosmetics",
        product_image: beauty
    },
];

export const product_item: Product[] = [
    {
      _id: "1",
      name: "Tank Top",
      image: product_1,
      price: 25,
      description: "A sleeveless top perfect for casual days.",
      category: "Dresses",
      stock: 20, 
    rating: 4.5,
    discount:20 
    },
    {
      _id: "2",
      name: "Mid Top",
      image: product_2,
      price: 15,
      description: "A mid-length top for a trendy everyday look.",
      category: "Dresses",
      stock: 20, 
      rating: 4.5, 
    },
    {
      _id: "3",
      name: "Kaftan Top",
      image: product_3,
      price: 20,
      description: "A loose, flowy top with wide sleeves for comfort and style.",
      category: "Dresses",
      stock: 20, 
      rating: 4.5, 
    },
    {
      _id: "4",
      name: "Short Top",
      image: product_4,
      price: 10,
      description: "A relaxed, flowy dress with half sleeves and button-down style.",
      category: "Dresses",
      stock: 20, 
      rating: 4.5, 
    },
    {
        _id: "5",
        name: "T Shirt",
        image: product_5,
        price: 12,
        description: "flowy dress with half sleeves and button-down style.",
        category: "Dresses",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "6",
        name: "Strappy Heels",
        image: product_6,
        price: 18,
        description: "style and comfort with these premium sneakers",
        category: "Footwears",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "7",
        name: "Addidas sneakers",
        image: product_7,
        price: 35,
        description: "comfort with these premium sneakers",
        category: "Footwears",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "8",
        name: "Nike sandals",
        image: product_8,
        price: 22,
        description: "style and comfort with these sandals",
        category: "Footwears",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "9",
        name: "Boots",
        image: product_9,
        price: 32,
        description: "comfort with these premium Boots",
        category: "Footwears",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "10",
        name: "Low sneaker",
        image: product_10,
        price: 12,
        description: "style and comfort with low sneakers",
        category: "Footwears",
        stock: 20, 
        rating: 4.5, 
        discount:20
      },
      {
        _id: "11",
        name: "Hand bag",
        image: product_11,
        price: 13,
        description: "Lightweight & comfortable to carry",
        category: "Bags & Accessories",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "12",
        name: "Short bag",
        image: product_12,
        price: 23,
        description: "Secure zipper or magnetic closure to keep items safe",
        category: "Bags & Accessories",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "13",
        name: "Duffel Bag",
        image: product_13,
        price: 10,
        description: " Ideal for work, travel, shopping, or casual outings",
        category: "Bags & Accessories",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "14",
        name: "Hobo Bag",
        image: product_14,
        price: 10,
        description: "Secure zipper or magnetic closure to keep item",
        category: "Bags & Accessories",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "15",
        name: "Satchel",
        image: product_15,
        price: 10,
        description: " Ideal for work, travel, shopping, or casual.",
        category: "Bags & Accessories",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "16",
        name: "Red Libstick",
        image: product_16,
        price: 11,
        description: " Enhances natural beauty with subtle finish",
        category: "Cosmetics",
        stock: 20, 
        rating: 4.5, 
        discount:15
      },
      {
        _id: "17",
        name: "Glow liquid",
        image: product_17,
        price: 13,
        description: "beauty with subtle finish",
        category: "Cosmetics",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "18",
        name: "Brushes",
        image: product_18,
        price: 15,
        description: "Can be used for daily or occasional makeup",
        category: "Cosmetics",
        stock: 20, 
        rating: 4.5, 
      },
      {
        _id: "19",
        name: "Suns cream",
        image: product_19,
        price: 12,
        description: "beauty with subtle finish",
        category: "Cosmetics",
        stock: 20, 
        rating: 4.5, 
        discount:22
      },
      {
        _id: "20",
        name: "Single penny",
        image: product_20,
        price: 20,
        description: "A relaxed, flowy dress with half sleeves and button-down style.",
        category: "Cosmetics",
        stock: 20, 
        rating: 4.5, 
        discount:15
      }

  ];