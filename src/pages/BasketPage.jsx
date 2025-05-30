import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../redux/slices/basketSlice';
import ProductList from '../components/ProductList/ProductList';
import EmptyState from '../components/EmptyState/EmptyState';
import './pages.scss';

const BasketPage = () => {
    const dispatch = useDispatch();
    const {items, totalPrice, totalPriceDiscount} = useSelector(state => state.basket)

    const handleClearBasket = () => {
        if (window.confirm('Удалить все товары из корзины?')) {
            dispatch(clearBasket());
        }
    };

    const handleCheckout = () => {
        // Имитация оформления заказа
        alert(`Заказ оформлен! 
            Товаров: ${items.length}
            Сумма: ${totalPriceDiscount} ₽`);

        dispatch(clearBasket());
    };

    if (items.length === 0) {
        return (
            <div className="basket-page page">
                <EmptyState
                    title="Корзина пуста"
                    description="Вы еще не добавили ни одного товара в корзину. Перейдите в каталог и выберите товары для покупки."
                    actionText="Перейти к товарам"
                    actionLink="/"
                />
            </div>
        );
    }

    return (
        <div className="basket-page page">
            <div className="basket-page__header">
                <h1 className="basket-page__title">
                    Корзина
                    <span className="basket-page__count">({items.length})</span>
                </h1>
            </div>

            <div className="basket-page__content">
                <ProductList
                    products={items}
                    showActions={false}
                    isBasket={true}
                />

                <section className="basket-page__sidebar">
                    <div className="basket-page__summary">
                        <h3 className="basket-page__summary-title">Итого</h3>

                        <div className="basket-page__summary-details">
                            <div className="basket-page__summary-row">
                                <span>Товаров:</span>
                                <span>{items.length} шт.</span>
                            </div>
                            <div className="basket-page__summary-row basket-page__summary-row--total">
                                <span>К оплате:</span>
                                <span className="basket-page__total-price">
                                    {totalPrice} ₽
                                </span>
                            </div>
                            <div className="basket-page__summary-row basket-page__summary-row--discount">
                                <span>К оплате со скидкой:</span>
                                <span className="basket-page__total-price--discount">
                                    {totalPriceDiscount} ₽
                                </span>
                            </div>
                        </div>

                        <div className="basket-page__actions">
                            <button
                                className="basket-page__checkout-btn"
                                onClick={() => handleCheckout()}
                            >
                                Оформить заказ
                            </button>

                            <button
                                className="basket-page__clear-btn"
                                onClick={handleClearBasket}
                            >
                                Очистить корзину
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BasketPage;