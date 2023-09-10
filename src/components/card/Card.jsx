import React from "react";
import style from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import toast from "react-hot-toast";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Assuming you have a cart state in your Redux store

  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(
      <div className="p-4 pt-2 pb-2">
        Product added to cart!
      </div>
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.success(
      <div className="p-4 pt-2 pb-2">
        Product removed from cart!
      </div>
    );
  };

  return (
    <div
      className={`rounded-xl flex flex-col border justify-between shadow-sm w-full ${style.product_card}`}
    >
      <div>
        <div className="w-full border-b relative h-52 p-5 pt-6 pb-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between mb-4 pt-2 top-0 w-full">
            <i className="fa-solid cursor-pointer text-xl fa-expand"></i>
            <i className="fa-regular cursor-pointer text-xl fa-heart"></i>
          </div>
          <img className="max-w-full z-[1] h-full" src={product.image} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className={`p-3 w-full`}>
            <div className={`text-base title font-semibold mb-3`}>
              {product.title}
            </div>
            <div className={`text-sm ${style.description}`}>
              {product.description}
            </div>
            <div className="price mt-2 font-semibold w-full">${product.price}</div>
          </div>
        </div>
      </div>

      <div className="p-3 mt-5 price pt-0 w-full flex items-center justify-end">
        {isProductInCart ? (
          <button
            className="uppercase border-none outline-none shadow-sm text-[12px] border w-full rounded-xl bg-red-500 transition-all hover:bg-red-600 text-[#ffffff] max-w-max pl-4 pr-4 p-2"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="uppercase border-none outline-none shadow-sm text-[12px] border w-full rounded-xl bg-[#000000] transition-all hover:bg-[#1d1d1d] text-[#ffffff] max-w-max pl-4 pr-4 p-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
