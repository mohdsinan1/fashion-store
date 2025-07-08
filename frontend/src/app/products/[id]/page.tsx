"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./productDetail.css";
import { useCart } from "@/components/CartContext";
import Lottie from "lottie-react";
import Link from "next/link";
import addToCartAnimation from "../../../assets/addCart.json";
import { product_item } from "../../../assets/assets";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<(typeof product_item)[0] | null>(null);
  const { addToCart } = useCart();
  const [showAnimation, setShowAnimation] = useState(false);
  const [mainImage, setMainImage] = useState<string>("");
  

  useEffect(() => {
    const foundProduct = product_item.find((p) => p._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image.src);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return <p className="loading-text">Product not found.</p>;

  const handleAddToCart = () => {
    addToCart({
      id: parseInt(product._id),
      title: product.name,
      price: product.price,
      image: product.image.src,
      quantity: 1,
    });
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 2000);
  };

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img src={mainImage} alt={product.name} className="detail-img" />
        <div className="detail-content">
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-category">Category: {product.category}</p>
          <p className="detail-desc">{product.description}</p>
          <p className="detail-price">${product.price.toFixed(2)}</p>

          <p
            className={`detail-stock ${
              product.stock > 0 ? "in-stock" : "out-of-stock"
            }`}
          >
            {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          

          <button
            className="add-button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>

          <div className="thumbnail-gallery">
            <img
              src={product.image.src}
              alt={product.name}
              className={`thumbnail ${
                mainImage === product.image.src ? "active" : ""
              }`}
              onClick={() => setMainImage(product.image.src)}
            />
          </div>

          <div className="rating">
            {"★".repeat(Math.floor(product.rating)) +
              "☆".repeat(5 - Math.floor(product.rating))}
            <span className="rating-number">({product.rating})</span>
          </div>

          {showAnimation && (
            <div className="lottie-wrapper">
              <Lottie animationData={addToCartAnimation} loop={false} />
            </div>
          )}
        </div>
      </div>

      <Link href="/products">
        <button className="back-btn1">← Back to Products</button>
      </Link>

      {showAnimation && (
        <div className="toast">🎉 Added {product.name} to cart!</div>
      )}


      <div className="customer-reviews">
  <h2 className="reviews-title">Customer Reviews</h2>

  <div className="review-card">
    <p className="review-text">"Absolutely loved this product! Great quality and fast delivery."</p>
    <div className="review-meta">
      <span className="reviewer-name">– Sarah M.</span>
      <span className="review-stars">★★★★★</span>
    </div>
  </div>

  <div className="review-card">
    <p className="review-text">"Good value for money. Will definitely order again."</p>
    <div className="review-meta">
      <span className="reviewer-name">– John D.</span>
      <span className="review-stars">★★★★☆</span>
    </div>
  </div>

  <div className="review-card">
    <p className="review-text">"Product was okay, but packaging could be better."</p>
    <div className="review-meta">
      <span className="reviewer-name">– Priya K.</span>
      <span className="review-stars">★★★☆☆</span>
    </div>
  </div>
</div>

    </div>
  );
}
