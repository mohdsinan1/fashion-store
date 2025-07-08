"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void; 
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prev =>
      prev.some(i => i.id === item.id)
        ? prev.map(i =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        : [...prev, item]
    );
  };

  const incrementItem = (id: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (id: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]); 
  };
  

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementItem, decrementItem, removeItem,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
