import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Borcelle",
  description: "Fashion store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png"/>
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />

      </head>
      <body>
        <Header/>
       <CartProvider>{children}</CartProvider>
        <Footer />
        
  
      </body>
    </html>
  );
}
