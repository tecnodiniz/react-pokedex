import React from 'react';
import CardId from '../../components/card-id';
import CardIamge from '../../components/card-image';
import CardName from '../../components/card-name';
import CardTypeList from '../../components/card-types-list';
import { handleTypeColor } from '../../utils/utils';
import './index.css';


function Card(props) {

    const {id, name, types, sprites} = props.pokemon;
    const sprite = sprites.other['official-artwork'].front_default;


    const cardColor = {
        backgroundColor: handleTypeColor(types[0].type.name)
    }
    
    return ( 
        <div className='card card__shadow card__effect' style={cardColor} >
            <CardId id={id} />
            <CardName name={name}/>
            <div className="card-body">
                <ol>
                    <CardTypeList types={types}/>
                </ol>
                <div className="poke-image">
                    <CardIamge path={sprite} alt={name} width={100}/>
                </div>
            </div>
        </div>
     );
}

export default Card;