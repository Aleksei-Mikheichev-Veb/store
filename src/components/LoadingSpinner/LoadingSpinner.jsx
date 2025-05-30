import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="loading-spinner__circle"></div>
            <p className="loading-spinner__text">Загрузка...</p>
        </div>
    );
};

export default LoadingSpinner;