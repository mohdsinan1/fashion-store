'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import './header.css';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Store", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contactus"},
  ];

  const isTransparent = pathname === '/';

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isTransparent ? 'header-transparent' : ''} ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="logo">
        <Link href="/">
          <span className="logo-text">BORCELLE</span>
        </Link>
      </div>

      <nav className="nav-desktop">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname === link.path ? "active-link" : ""}
              >
                {link.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="utility-icons nav-desktop">
        <Link href="/products"><Search size={20} /></Link>
        <Link href="/cart"><ShoppingCart size={20} /></Link>
        <Link href="/Login"><User size={20} /></Link>
      </div>

      {/* Hamburger icon */}
      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="nav-links-mobile">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={pathname === link.path ? "active-link" : ""}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <div className="utility-icons-mobile">
            <Link href="/search"><Search size={20} /></Link>
            <Link href="/cart"><ShoppingCart size={20} /></Link>
            <Link href="/account"><User size={20} /></Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
