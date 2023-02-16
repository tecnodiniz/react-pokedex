import './index.css';
function CardTypeList(props) {
    
    return ( 
        <>{props.types.map((item) => <li key={item.type.name} className='card-type-list'>{item.type.name}</li>)}</>
        // <li className="card-type-list">{props.item}</li>
    );
}

export default CardTypeList;