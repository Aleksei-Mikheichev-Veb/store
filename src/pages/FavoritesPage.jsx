import React from 'react';
import { useSelector} from "react-redux";
import ProductList from "../components/ProductList/ProductList";
import EmptyState from "../components/EmptyState/EmptyState";
import './pages.scss';

const FavoritesPage = () => {
    const {items} = useSelector(state => state.favorites)
    console.log(items)

    if (items.length === 0) {
        return (
            <div className="favorites-page page">
                <EmptyState
                    title="Нет товаров в избранном"
                    description="Вы еще не добавили ни одного товара в избранное. Перейдите в каталог и добавьте понравившиеся товары."
                    actionText="Перейти к товарам"
                    actionLink="/"
                />
            </div>
        );
    }

    return (
        <div className="favorites-page page">
            <h1>Избранные товары</h1>
            <ProductList products={items} showActions={false} emptyMessage={"У Вас нет избранных товаров"}/>
        </div>
    );
};

export default FavoritesPage;