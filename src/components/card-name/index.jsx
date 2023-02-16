import { useEffect, useState } from 'react';
import './index.css';

function CardName(props) {
    const [size,setSize] = useState('1.15rem');
    
    const font = {
        fontSize: size
    }
    useEffect(() =>{
        setSize(props.size);
    },[props.size])

    return ( 
        <span className='card-name'><p style={font}>{props.name}</p></span>
    );
}

export default CardName;