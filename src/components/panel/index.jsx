import './index.css';
function Panel(props) {
    
    return ( 
        <div className="panel">
            {props.content.map((box) =>
                <div className='panel-content' key={box.label}>
                    <strong>{box.label}</strong>
                    <p>{box.content}</p>
                </div>
            )}
        </div>
     );
}

export default Panel;