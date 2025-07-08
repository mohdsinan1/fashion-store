// /pages/categories.tsx (or any other page you're using to display the categories)

import { useState } from 'react';
import { product_list, ProductItem, product_item } from '../../assets/assets'; // Assuming this contains all the products
import Image from 'next/image';
import './categories.css';

const Categories: React.FC = () => {
    // Set up a state to track the selected category
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Function to handle category selection
    const handleCategoryClick = (categoryName: string) => {
        if (selectedCategory === categoryName) {
            // If the category is already selected, we can unselect it
            setSelectedCategory(null);
        } else {
            setSelectedCategory(categoryName);
        }
    };

    // Filter the products based on the selected category
    const filteredProducts = selectedCategory
        ? product_item.filter(
              (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
          )
        : [];

    return (
        <section className="categories-section">
            <h2 className="categories-title">Shop by Category</h2>
            <div className="categories-grid">
                {product_list.map((item: ProductItem, index: number) => (
                    <div
                        key={index}
                        className="category-card"
                        onClick={() => handleCategoryClick(item.product_name)}
                    >
                        <div className="category-image-wrapper">
                            <Image
                                src={item.product_image}
                                alt={item.product_name}
                                layout="fill"
                                className="category-image"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                        <h3 className="category-name">{item.product_name}</h3>
                    </div>
                ))}
            </div>

            {/* Show the filtered products if a category is selected */}
            {selectedCategory && (
                <>
                    <h2 className="products-title">Products in {selectedCategory}</h2>
                    <div className="products-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product._id} className="product-card">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                       
                                        className="product-image"
                                    />
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">${product.price}</p>
                                    <p className="product-description">{product.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No products found in this category.</p>
                        )}
                    </div>
                </>
            )}
        </section>
    );
};

export default Categories;
