import React, { useState } from 'react';
import ProductListItem from './ProductListItem';

const ProductListing = () => {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "Product 1",
      "price": 100,
      "discount": 10,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 150,
      "discount": 15,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 200,
      "discount": 20,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 4,
      "name": "Product 4",
      "price": 250,
      "discount": 25,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 5,
      "name": "Product 5",
      "price": 300,
      "discount": 30,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 6,
      "name": "Product 6",
      "price": 350,
      "discount": 35,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 7,
      "name": "Product 7",
      "price": 400,
      "discount": 40,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 8,
      "name": "Product 8",
      "price": 450,
      "discount": 45,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 9,
      "name": "Product 9",
      "price": 500,
      "discount": 50,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 10,
      "name": "Product 10",
      "price": 550,
      "discount": 55,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 10,
      "name": "Product 10",
      "price": 500,
      "discount": 50,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    },
    {
      "id": 11,
      "name": "Product 11",
      "price": 550,
      "discount": 55,
      "image": "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg"
    }

  ]);
  return (
    <div className="flex-[7] flex flex-wrap justify-around gap-5">
      {products.map(product => <ProductListItem product={product} />)}
    </div>
  );
}

export default ProductListing;
