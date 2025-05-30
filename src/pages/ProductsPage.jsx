import React, {useEffect} from 'react';
import './pages.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/slices/productsSlice";
import ProductList from "../components/ProductList/ProductList";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";


const ProductsPage = () => {
    const dispatch = useDispatch()
    const {items, loading, error} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    const handleRetry = () => {
        dispatch(fetchProducts());
    };

    if (loading) {
        return (
            <div className="products-page">
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="products-page">
                <ErrorMessage message={error} onRetry={handleRetry} />
            </div>
        );
    }

    return (
        <div className="page">
            <h1>Каталог товаров</h1>
            <ProductList products={items}/>
        </div>
    );
};

export default ProductsPage;