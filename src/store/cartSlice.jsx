// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Function to load the cart from cookies
const loadCartFromCookies = () => {
  const cartData = Cookies.get("cart");
  return cartData ? JSON.parse(cartData) : [];
};

// Function to save the cart to cookies
const saveCartToCookies = (cart) => {
  Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Set an expiration date if needed
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromCookies(), // Load cart data from cookies
  reducers: {
    addToCart: (state, action) => {
      // Add the product to the cart
      const product = { ...action.payload, quantity: 1 };
      state.push(product);

      // Save the updated cart to cookies
      saveCartToCookies(state);
    },
    removeFromCart: (state, action) => {
      // Remove a product from the cart by ID
      const productIdToRemove = action.payload;
      const updatedCart = state.filter((product) => product.id !== productIdToRemove);

      // Save the updated cart to cookies
      saveCartToCookies(updatedCart);

      // Update the state with the filtered cart
      return updatedCart;
    },
    increaseQuantity: (state, action) => {
      // Increase quantity of a product in the cart by ID
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }

      // Save the updated cart to cookies
      saveCartToCookies(state);
    },
    decreaseQuantity: (state, action) => {
      // Decrease quantity of a product in the cart by ID
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        // Remove the product if the quantity becomes 0 or negative
        const productIdToRemove = action.payload;
        const updatedCart = state.filter((item) => item.id !== productIdToRemove);

        // Save the updated cart to cookies
        saveCartToCookies(updatedCart);

        // Update the state with the filtered cart
        return updatedCart;
      }

      // Save the updated cart to cookies
      saveCartToCookies(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
