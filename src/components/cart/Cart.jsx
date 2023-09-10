import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../store/cartSlice";
import "./Cart.scss";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate subtotal
  const subtotal = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Format subtotal as "1,200.00"
  const formattedSubtotal = subtotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className={`pb-20`}>
      <div className="bg-[#FAF5F5] flex items-center min-h-[100px]">
        <div className="custom_container w-full text-2xl font-semibold">
          Your Shopping Cart
        </div>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="mt-20">
            <div className={`custom_container border`}>
              <div className="uppercase border-b text-sm pt-5 pb-5 flex justify-between font-semibold">
                <div className="w-full">Product</div>
                <div className="flex w-full">
                  <div className="w-full text-center">Quantity</div>
                  <div className="w-full text-right">Total</div>
                </div>
              </div>
              {cart.map((product, index) => (
                <div
                  className="flex gap-5 justify-between font-semibold pt-5 pb-5 border-b"
                  key={index}
                >
                  <div className="w-full flex gap-2">
                    <div className="w-[400px] border p-4 flex items-center justify-center h-32">
                      <img
                        className="max-w-full h-full"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[1px]">
                      <p className="text-lg font-normal">{product.title}</p>
                      <p className="text-base description mb-3 mt-2 font-normal">
                        {product.description}
                      </p>
                      <p className="text-[#666666] text-base font-normal">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="w-full flex items-center justify-center">
                        <div className="w-[150px] flex items-center rounded-lg quantity text-center border-2">
                        {/* Quantity decrease button */}
                        <button
                            className={`border-0 w-1/2 py-1 focus:outline-none ${product.quantity === 1 ? "cursor-not-allowed" : ""}`}
                            onClick={() => dispatch(decreaseQuantity(product.id))}
                            disabled={product.quantity === 1}                        
                        >
                            -
                        </button>
                        {/* Display the quantity */}
                        <div className="w-1/2 border-0 py-1">{product.quantity}</div>
                        {/* Quantity increase button */}
                        <button
                            className="border-0 w-1/2 py-1 focus:outline-none"
                            onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                            +
                        </button>
                        </div>
                        <div className="ml-3">
                            <button className="bg-[#ff5252] p-3 pb-1 pt-1 rounded text-white"
                            onClick={() => dispatch(removeFromCart(product.id))}
                            >
                                <i className="fa-solid text-sm fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full quantity_total_price text-right text-base">
                      {/* Display the total price based on quantity */}$
                      {(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-16">
                <div className="">
                  <div className="flex justify-end gap-5">
                    <h2 className="text-lg font-semibold">Subtotal:</h2>
                    <p className="text-[#ff5252] font-semibold text-lg">
                    {formattedSubtotal} USD
                    </p>
                  </div>
                  <div className="flex justify-end mt-5">
                    <div className="">
                      <button className="bg-[#ff5252] p-3 block w-[300px] rounded-lg uppercase font-semibold text-white">
                        Check out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="custom_container flex items-center justify-center min-h-[300px]">
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-3xl">Your cart is empty.</p>
            <Link to="/" className="bg-[#ff5252] text-sm text-center p-3 block w-[200px] rounded-lg uppercase font-semibold text-white">Continue shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}
