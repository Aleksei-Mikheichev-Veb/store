import React from 'react';
import './ErrorMessage.scss';

const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="error-message">
            <div className="error-message__icon">❌</div>
            <h3 className="error-message__title">Произошла ошибка</h3>
            <p className="error-message__text">{message}</p>
            {onRetry && (
                <button
                    className="error-message__retry"
                    onClick={onRetry}
                >
                    Попробовать снова
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;