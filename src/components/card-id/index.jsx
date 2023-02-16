import React from 'react';
import './index.css';
function CardId(props) {

    const formatId = (id) =>{
        let newId = "";
        if(id < 10)
            newId = "#00"+id;
        else if (id >= 10 && id < 100)
                newId = "#0"+id;
        else newId = "#"+id;

        return newId;
    }
    return ( 
        <span className='card-id'><p>{formatId(props.id)}</p></span>
    );
}

export default CardId;