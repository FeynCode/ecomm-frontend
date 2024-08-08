import { FiHeart, FiX } from "react-icons/fi";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { store } from "../utils/redux-store/store";
import { addToCart } from "../utils/redux-store/slices/cart";

const ProductListItem = ({ product }) => {
  const [filledHeart, setFilledHeart] = useState("white");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    quantity: 1,
    color: "red",
    size: "S",
    ...product,
  });

  const setColor = (color) => {
    setSelectedItem({ ...selectedItem, color });
  };

  const setSize = (size) => {
    setSelectedItem({ ...selectedItem, size });
  };

  return (
    <>
      <div className="max-w-[300px] rounded-lg my-3 border border-black hover:shadow-2xl cursor-pointer  ">
        <div className="relative -z-[1] text-white cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-t-lg "
          />
          <div
            className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black to-transparent"
            id="desc"
          >
            <div>
              <p className="text-base inline-block">₹{product.price}&ensp;</p>
              <p className="font-light inline-block text-xs line-through  strike">
                ₹{product.price + 500}
              </p>
              &ensp;
              <p className="font-semibold inline-block text-lime-500 text-sm">
                {product.discount}% off
              </p>
            </div>
            <div className="text-sm  font-light">{product.name}</div>
            <div className="flex items-center text-xs">
              <FiStar fill="orange" color="orange" size={14} /> &nbsp; 4.5 | 50
            </div>
          </div>
          <div className="absolute top-5 right-0 bg-red-400 px-3 py-px rounded-l-lg text-white drop-shadow-lg  border-l border-y border-black ">
            SALE
          </div>
        </div>
        <div className="flex items-center border-t border-black rounded-b-lg cursor-pointer bg-white">
          <div
            className="flex-1 uppercase text-center outline-r p-5 border-r border-black rounded-bl-lg  hover:bg-gray-100"
            onClick={() => setShowModal(true)}
          >
            Add to Cart
          </div>
          <div
            className="p-5 hover:bg-gray-100 rounded-br-lg flex items-center"
            onMouseEnter={() => setFilledHeart("#d1546b")}
            onMouseLeave={() => setFilledHeart("white")}
          >
            <FiHeart className="text-xl" fill={filledHeart} color="black" />
          </div>
        </div>
      </div>
      <div>
        <div
          className={
            "fixed backdrop-blur-sm bg-black/50 h-screen top-0 left-0 w-screen " +
            (showModal ? "block" : "hidden")
          }
          onClick={() => setShowModal(false)}
        />
        <div
          className={
            "min-w-[1000px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-2xl " +
            (showModal ? "block" : "hidden")
          }
        >
          <div className="flex justify-between p-5 border-b items-center">
            <div className="text-xl uppercase font-light">Add to Cart</div>
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-1/3 rounded-lg border"
              />
              <div className="flex-1 p-5 h-full  self-start flex flex-col ">
                <div className="text-xl mb-3 ">{product.name}</div>
                <div className="text-sm font-semibold flex gap-2">
                  <div className="text-base">₹{product.price}</div>
                  <div className="text-sm line-through font-light">
                    ₹{product.price + 500}
                  </div>
                  <div className="text-sm font-semibold text-lime-500">
                    {product.discount}% off
                  </div>
                </div>
                <div className="flex items-center text-xs mb-10 ">
                  <FiStar fill="orange" color="orange" size={14} /> &nbsp; 4.5 |
                  50
                </div>
                <div className="text-sm font-light flex justify-center flex-col gap-2">
                  <div className="w-full uppercase text-lg">Color - </div>
                  <div className="flex items-center">
                    <span
                      className={
                        "w-10 h-10 bg-red-400 rounded-full inline-block hover:drop-shadow-lg border hover:border-gray-500 cursor-pointer " +
                        (selectedItem.color === "red"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setColor("red")}
                    ></span>
                    &ensp;
                    <span
                      className={
                        "w-10 h-10 bg-blue-400 rounded-full inline-block hover:drop-shadow-lg border hover:border-gray-500 cursor-pointer " +
                        (selectedItem.color === "blue"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setColor("blue")}
                    ></span>
                    &ensp;
                    <span
                      className={
                        "w-10 h-10 bg-green-400 rounded-full inline-block hover:drop-shadow-lg border hover:border-gray-500  cursor-pointer " +
                        (selectedItem.color === "green"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setColor("green")}
                    ></span>
                  </div>
                </div>
                <div className="text-sm font-light flex justify-center flex-col gap-2 mt-5">
                  <div className="w-full uppercase text-lg">Size - </div>
                  <div className="flex items-center">
                    <span
                      className={
                        "w-10 h-10 rounded-md flex items-center justify-center hover:shadow-md shadow-black border hover:border-gray-500 cursor-pointer " +
                        (selectedItem.size === "S"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setSize("S")}
                    >
                      S
                    </span>
                    &ensp;
                    <span
                      className={
                        "w-10 h-10 rounded-md flex items-center justify-center hover:shadow-md shadow-black border border-gray-200 hover:border-gray-500 cursor-pointer " +
                        (selectedItem.size === "M"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setSize("M")}
                    >
                      M
                    </span>
                    &ensp;
                    <span
                      className={
                        "w-10 h-10 rounded-md flex items-center justify-center hover:shadow-md shadow-black border border-gray-200 hover:border-gray-500 cursor-pointer " +
                        (selectedItem.size === "L"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setSize("L")}
                    >
                      L
                    </span>
                    &ensp;
                    <span
                      className={
                        "w-10 h-10 rounded-md flex items-center justify-center hover:shadow-md shadow-black border border-gray-200 hover:border-gray-500 cursor-pointer " +
                        (selectedItem.size === "XL"
                          ? "border-2 border-gray-500"
                          : "border-gray-200")
                      }
                      onClick={() => setSize("XL")}
                    >
                      XL
                    </span>
                  </div>
                </div>
                <div className="flex items-center rounded-b-lg cursor-pointer bg-white mt-10">
                  <div
                    className="flex-1 uppercase text-center rounded-md flex p-3 items-center justify-center hover:shadow-md shadow-black border border-gray-200 hover:border-gray-500 cursor-pointer"
                    onClick={() => {
                      setShowModal(false);
                      store.dispatch(addToCart(selectedItem));
                    }}
                  >
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
