import React from 'react';
import './index.css';

const ImageGrid = ({children}) => {
    return (  
        <div className="image-grid">
            {children}

        </div>
    );
}

export default ImageGrid;