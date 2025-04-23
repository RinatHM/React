import React from 'react';

// Этот HOC оборачивает компонент и добавляет индикатор загрузки
const withLoadingIndicator = (WrappedComponent) => {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return <div>Загрузка...</div>;  // Можно заменить текст на любой спиннер или индикатор
        }
        
        return <WrappedComponent {...props} />;
    };
};

export default withLoadingIndicator;