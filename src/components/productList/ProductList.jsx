import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import style from "./ProductList.module.scss"

export default function ProductList() {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Set the fetched products in the state
        setProducts(response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="custom_container">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ${style.card_in_product_list}`}>
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}  
        </div>
      </div>
    </div>
  );
}
