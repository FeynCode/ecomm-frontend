import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import { FiStar } from "react-icons/fi";


const ProductListItem = ({ product }) => {
  const [filledHeart, setFilledHeart] = useState("white");
  return (
    <div className="max-w-[300px] rounded-lg my-3 border border-black hover:drop-shadow-2xl  ">
      <div className="relative -z-[1] text-white cursor-pointer">
        <img src={product.image} alt={product.name} className="w-full rounded-t-lg " />
        <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black to-transparent" id="desc">
          <div>
            <p className="text-base inline-block">₹{product.price}&ensp;</p>
            <p className="font-light inline-block text-xs line-through  strike">₹{product.price + 500}</p>&ensp;
            <p className="font-semibold inline-block text-lime-500 text-sm">50% off</p>
          </div>
          <div className="text-sm  font-light">{product.name}</div>
          <div className="flex items-center text-xs"><FiStar fill="orange" color="orange" size={14} /> &nbsp; 4.5 | 50</div>
        </div>
        <div className="absolute top-5 right-0 bg-red-400 px-3 py-px rounded-l-lg text-white drop-shadow-lg  border-l border-y border-black ">
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
