import React from 'react';
import './index.css'
function TypeList(props) {
    return ( 
        <>{props.types.map((item)=> <li key={item.type.name} className='type-list'><p>{item.type.name}</p>  </li>)}</>
     );
}

export default TypeList;