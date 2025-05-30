import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyState.scss';

const EmptyState = ({
                        title,
                        description,
                        actionText = "Перейти к товарам",
                        actionLink = "/"
                    }) => {
    return (
        <div className="empty-state">
            <div className="empty-state__icon">📦</div>
            <h2 className="empty-state__title">{title}</h2>
            <p className="empty-state__description">{description}</p>
            <Link to={actionLink} className="empty-state__action">
                {actionText}
            </Link>
        </div>
    );
};

export default EmptyState;