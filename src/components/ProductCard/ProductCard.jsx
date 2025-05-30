import React from 'react';
import './ProductCard.scss'
import plugImg from './../../assets/images/plug.png'
import {useDispatch} from "react-redux";
import {addToBasket, removeFromBasket} from "../../redux/slices/basketSlice";
import {addToFavorites, removeFromFavorites} from "../../redux/slices/favoritesSlice";

const ProductCard = React.memo(({product, showActions = true, isBasket, isInBasket, isInFavorites}) => {
    const dispatch = useDispatch();
    const isAvailable = product.quantity > 0 ;

    const handleAddToBasket = () => {
        if (isAvailable && !isInBasket) {
            dispatch(addToBasket(product));
        }
    };

    const handleRemoveFromBasket = () => {
        dispatch(removeFromBasket(product.id));
    };

    const handleAddToFavorites = () => {
        if (!isInFavorites) {
            dispatch(addToFavorites(product));
        }
    };

    const handleRemoveFromFavorites = () => {
        dispatch(removeFromFavorites(product.id));
    };
    return (
        <article className={`product-card ${isBasket ? "product-card__basket" : ""}`}>

            <div className="product-card__img-box">
                <img src={product.preview_picture || plugImg} alt={product.name} title={product.name} className="product-card__img"/>
                {product.labels && (
                    <div className="product-card__labels">
                        {product.labels.new && (
                            <span className="product-card__label product-card__label--new">
                                {product.labels.new}
                            </span>
                        )}
                        {product.labels.discount && (
                            <span className="product-card__label product-card__label--discount">
                                {product.labels.discount}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="product-card__content">
                <h3 className="product-card__title">{product.name}</h3>
                <div className="product-card__price">
                    {product.price_discount ? (
                        <>
                            <span className="product-card__price-discount">
                                {product.price_discount} ₽
                            </span>
                            <span className="product-card__price-original">
                                {product.price} ₽
                            </span>
                        </>
                    ) : (
                        <span className="product-card__price-current">
                            {product.price} ₽
                        </span>
                    )}
                </div>
                <div className="product-card__info">
                    <span className="product-card__quantity">
                        В наличии: {product.quantity}
                    </span>
                    {product.reviews > 0 && (
                        <span className="product-card__reviews">
                          Отзывы: {product.reviews}
                        </span>
                    )}
                </div>
                {/* Кнопки действий */}
                {showActions && (
                    <div className="product-card__actions">
                        {/* Кнопка корзины */}
                        {!isAvailable ? (
                            <button
                                className="product-card__btn product-card__btn--unavailable"
                                disabled>
                                Отсутствует
                            </button>
                        ) : isInBasket ? (
                            <button
                                className="product-card__btn product-card__btn--in-cart"
                                disabled
                            >
                                В корзине
                            </button>
                        ) : (
                            <button
                                className="product-card__btn product-card__btn--cart"
                                onClick={handleAddToBasket}
                            >
                                В корзину
                            </button>
                        )}

                        {/* Кнопка избранного */}
                        {isInFavorites ? (
                            <button
                                className="product-card__btn product-card__btn--in-favorites"
                                disabled
                            >
                                В избранном
                            </button>
                        ) : (
                            <button
                                className="product-card__btn product-card__btn--favorites"
                                onClick={handleAddToFavorites}
                            >
                                В избранное
                            </button>
                        )}
                    </div>
                )}

                {/* Кнопки удаления (для страниц корзины и избранного) */}
                {!showActions && (
                    <div className="product-card__remove-actions">
                        {isInBasket && isBasket && (
                            <button
                                className="product-card__btn product-card__btn--remove"
                                onClick={handleRemoveFromBasket}
                            >
                                Удалить из корзины
                            </button>
                        )}
                        {isInFavorites && !isBasket && (
                            <button
                                className="product-card__btn product-card__btn--remove"
                                onClick={handleRemoveFromFavorites}
                            >
                                Удалить из избранного
                            </button>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
});

export default ProductCard;