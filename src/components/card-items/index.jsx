import './index.css';
function Carditems(props) {
    const items = props.items.join(', ')
    const title = props.title

    return (
        <div className='card-items'>
            <strong>{title}</strong>
            <p>{items}</p>
            
        </div>
    );
}

export default Carditems;