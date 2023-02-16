import React, { useState } from 'react';
import './index.css';

function TabLink ({label, onClick, isActive}) {
    return ( 
    <button
        className={`tab-link ${isActive ? 'active' : ''}`}
        onClick={onClick}
    
    >{label}</button> );
}

export default TabLink;