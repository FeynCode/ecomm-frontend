import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";

const dummyProductsGenerator = (count) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    let price = 100 * i;
    products.push({
      id: i,
      name: `HUSTLE Blue Oversized Graphic Back Printed Tshirt ${i}`,
      price: price,
      discount: ((price / (price + 500)) * 100 - 100).toFixed(0),
      image:
        "https://ik.imagekit.io/adityaportfolio/Ecomm/sweatshirt_FC9WLeFCK.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
    });
  }
  return products;
};

const ProductListing = ({ showFilter }) => {
  const [products, setProducts] = useState(dummyProductsGenerator(12));
  useEffect(() => {
    if (showFilter) {
      setProducts(dummyProductsGenerator(12));
    } else {
      setProducts(dummyProductsGenerator(15));
    }
  }, [showFilter]);

  return (
    <div className="flex-[7] flex flex-wrap justify-around gap-5">
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductListing;
