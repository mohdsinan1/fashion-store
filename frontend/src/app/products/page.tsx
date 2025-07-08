"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./style.css";
import Lottie from "lottie-react";
import loadanimation from "../../assets/loading animation.json.json";
import { product_item } from "../../assets/assets";
import type { Product } from '../../assets/assets';

import { toast,ToastContainer } from "react-toastify"; // 🍞 for toast notifications
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // ✨ for animations

export default function Product() {
 const [isLoading, setIsLoading] = useState(true);
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const [sortedProducts, setSortedProducts] = useState<Product[]>([...product_item]);
const [sortOption, setSortOption] = useState<string>('default');


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

//   const handleAddToCart = (product: Product) => {
//   toast.success(`${product.name} added to cart! 🛒`);
// };

 const handleQuickView = (product: Product) => {
  setSelectedProduct(product);
};

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const option = e.target.value;
  setSortOption(option);

  let sortedArray = [...product_item];

  if (option === "priceLowHigh") {
    sortedArray.sort((a, b) => a.price - b.price);
  } else if (option === "priceHighLow") {
    sortedArray.sort((a, b) => b.price - a.price);
  } else if (option === "nameAsc") {
    sortedArray.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // default → original array
    sortedArray = [...product_item];
  }

  setSortedProducts(sortedArray);
};


  if (isLoading) {
    return (
      <div className="loader-overlay">
        <div className="loader-box">
          <Lottie
            animationData={loadanimation}
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
          <p className="loader-text">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-container">
      {/* <h1 className="text-center">✨ Our Products</h1> */}

      <div className="sort-filter">
        <label>Sort by:</label>
       <select value={sortOption} onChange={handleSortChange}>

          <option value="default">Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="nameAsc">Name: A-Z</option>
        </select>
      </div>

      <motion.div
        className="product-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {sortedProducts.map((product) => (

          <motion.div
            key={product._id}
            className="product-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="product-img-wrapper" onClick={() => handleQuickView(product)}>
              <img src={product.image.src} alt={product.name} className="product-img" />
              {product.discount && (
                <span className="discount-badge">-{product.discount}%</span>
              )}
            </div>
            <h2 className="product-title">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="button-group">
              <Link href={`/products/${product._id}`}>
                <button className="view-button">View Details</button>
              </Link>
              {/* <button className="cart-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedProduct.image.src} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>${selectedProduct.price.toFixed(2)}</p>
            <p>{selectedProduct.description || "No description available."}</p>
          </div>
        </div>
      )}

      {/* Toast notification container */}
      <ToastContainer position="bottom-right" />

    </div>
  );
}
