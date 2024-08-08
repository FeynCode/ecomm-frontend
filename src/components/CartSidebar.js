import { useState } from "react";
import { FiTrash2, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { store } from "../utils/redux-store/store";
import { toggleCart } from "../utils/redux-store/slices/cart";

const CartSideBar = () => {
  const isCartOpen = useSelector((state) => state.cart.isVisible);
  const cartCount = useSelector((state) => state.cart.cart.length);
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      <div
        className={
          "fixed top-0 right-0 h-screen w-1/4 bg-white drop-shadow-xl " +
          (isCartOpen ? "fixed" : "hidden")
        }
      >
        <div className="flex justify-between py-5 border-b items-center min-h-[90px] px-7">
          <div className="text-xl uppercase font-light">Cart</div>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => store.dispatch(toggleCart())}
          />
        </div>
        {cartCount === 0 ? (
          <div className="flex flex-col justify-center items-center h-[80vh]">
            <img
              src="https://ik.imagekit.io/adityaportfolio/Ecomm/Add%20to%20Cart-amico_-MU6oy_fV.svg?updatedAt=1723150474686"
              alt="Empty Cart"
              className="w-2/3 object-cover"
            />
            <div className="text-xl uppercase mt-5">
              looks like your cart is on a diet
            </div>
            <div className="text-gray-500 mt-2">
              Add something to make it happy
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-5 px-7"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="ml-5">
                    <div className="text-lg">{item.name}</div>
                    <div className="text-gray-500">₹{item.price}</div>
                  </div>
                </div>
                <FiTrash2 className="text-2xl cursor-pointer" />
              </div>
            ))}
            <div className="fixed flex bottom-0 border-t-2 border-black w-full justify-between items-center py-5 px-7">
              <div className="text-lg flex-1">Total</div>
              <div className="text-xl">
                ₹{cart.reduce((acc, item) => acc + item.price, 0)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSideBar;
