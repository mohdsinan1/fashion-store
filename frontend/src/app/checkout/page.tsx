"use client";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import toast from "react-hot-toast";
import Link from "next/link";
import "./checkout.css";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || !address || !email) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Order placed successfully!");
    clearCart();
    // Redirect or API call can go here
  };

  if (cart.length === 0) {
    return (
      <div className="empty-checkout">
        <h2>Your cart is empty. Please add items first.</h2>
        <Link href="/">
          <button className="back-btn">Back to Shop</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>🧾 Checkout</h1>

      <div className="checkout-form">
        <label>
          Name:
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Address:
          <textarea
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.title} className="checkout-item-img" />
            <div>
              <p className="checkout-item-title">{item.title} x {item.quantity}</p>
              <p className="checkout-item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        <hr />
        <h3>
          Total: <span className="total-price">${totalPrice.toFixed(2)}</span>
        </h3>
      </div>

      <button className="place-order-btn" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}
