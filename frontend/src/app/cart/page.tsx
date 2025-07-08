"use client";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import "./cart.css";
import Lottie from "lottie-react";
import emptyCartAnimation from "../../assets/empty-cart.json.json";
import removeCartAnimation from "../../assets/removecart.json";
import toast from "react-hot-toast";
import Link from "next/link";

export default function CartPage() {
  const { cart, incrementItem, decrementItem, removeItem, clearCart } =
    useCart();
  const [removingItems, setRemovingItems] = useState<{
    [key: number]: boolean;
  }>({});

  const handleRemove = (id: number) => {
    setRemovingItems((prev) => ({ ...prev, [id]: true }));

    // Trigger item removal after a short delay (animation duration)
    setTimeout(() => {
      removeItem(id);
      toast.success("Item removed from cart");

      // Reset the removingItems state after removal
      setRemovingItems((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }, 1500); // Match this timeout with your animation duration
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <Lottie
          animationData={emptyCartAnimation}
          loop={true}
          style={{ height: 300 }}
        />
        <p className="empty-cart-text">🛒 Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛍️ Your Cart</h1>

      <button
        className="clear-cart-btn"
        onClick={() => {
          clearCart();
          toast.success("Cart cleared!");
        }}
      >
        Clear Cart
      </button>

      {cart.map((item) => (
        <div
          key={item.id}
          className={`cart-item ${removingItems[item.id] ? "removing" : ""}`}
        >
          <img src={item.image} alt={item.title} className="cart-item-img" />
          <div className="cart-item-details">
            <h3 className="cart-item-title">{item.title}</h3>

            <p className="cart-item-unit-price">
              Unit Price: <strong>${item.price.toFixed(2)}</strong>
            </p>
            <p className="cart-item-subtotal">
              Subtotal:{" "}
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </p>

            <div className="cart-qty-controls">
              <button
                onClick={() => {
                  decrementItem(item.id);
                  toast("Decreased quantity");
                }}
                className="qty-btn"
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span className="cart-item-qty badge">{item.quantity}</span>

              <button
                onClick={() => {
                  incrementItem(item.id);
                  toast("Increased quantity");
                }}
                className="qty-btn"
              >
                +
              </button>

              <button
                onClick={() => handleRemove(item.id)}
                className="remove-btn"
                disabled={removingItems[item.id]}
              >
                Remove
              </button>
            </div>

            {removingItems[item.id] && (
              <div className="remove-animation">
                <Lottie
                  style={{ width: 60, height: 60 }}
                  animationData={removeCartAnimation}
                  loop={false}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>
          Total:{" "}
          <span className="total-price">
            $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </h2>

        <Link href="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}
