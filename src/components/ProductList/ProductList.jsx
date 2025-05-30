import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss';
import {useSelector} from "react-redux";

const ProductList = ({ products, showActions = true, emptyMessage, isBasket }) => {
    const basketItems = useSelector(state => state.basket.items);
    const favoriteItems = useSelector(state => state.favorites.items);

    const isInBasket = (id) => basketItems.some(item => item.id === id);
    const isInFavorites = (id) => favoriteItems.some(item => item.id === id);
    if (!products || products.length === 0) {
        return (
            <div className="product-list__empty">
                {emptyMessage || "Товары не найдены"}
            </div>
        );
    }
    return (
        <main className="product-list">
            <div className={`product-list__grid ${isBasket ? "product-list__grid-basket" : ""}`}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        showActions={showActions}
                        isBasket={isBasket}
                        isInBasket={isInBasket(product.id)}
                        isInFavorites={isInFavorites(product.id)}
                    />
                ))}
            </div>
        </main>
    );
};

export default ProductList;