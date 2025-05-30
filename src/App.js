import './App.css';
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header/Header";
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/products"/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/basket" element={<BasketPage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
