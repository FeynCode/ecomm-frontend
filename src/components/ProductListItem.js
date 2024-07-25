import { FiHeart } from "react-icons/fi";
import { useState } from "react";

const ProductListItem = ({ product }) => {
  const [filledHeart, setFilledHeart] = useState("white");
  return (
    <div className="max-w-[300px] m-10 rounded-lg border border-black hover:drop-shadow-2xl hover:-z-[1] ">
      <div className="relative -z-[1] ">
        <img src={product.image} alt={product.name} className="w-full rounded-t-lg " />
        <div className="absolute bottom-0 bg-gradient-to-t from-white w-full h-[50px] p-3 to-transparent">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className="absolute top-5 right-5 bg-white px-3 py-1 rounded-full">
          SALE
        </div>
      </div>
      <div className="flex items-center border-t border-black rounded-b-lg cursor-pointer bg-white">
        <div className="flex-1 uppercase text-center outline-r p-5 border-r border-black">
          Add to Cart
        </div>
        <div className="p-5" onMouseEnter={() => setFilledHeart("#d1546b")} onMouseLeave={() => setFilledHeart("white")} >
          <FiHeart className="text-xl" fill={filledHeart} color="black" />
        </div>
      </div>
    </div>

  );
}

export default ProductListItem;
