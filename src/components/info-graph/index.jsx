import { handleInfoGraphBar } from '../../utils/utils';
import './index.css';
function InfoGraph(props) {

    const bar = {
        width: `${props.value}%`,
        backgroundColor: handleInfoGraphBar(props.value),
        height:'3px'
    }
    return ( 
        <div className='info-graph'>
            <div className='info-graph box' style={{justifyContent:'space-between',marginRight:'1rem'}}>
                <small>{props.label}</small>
                <strong>{props.value}</strong>
            </div>
          
          <div className='info-graph box' style={{backgroundColor:'rgb(223 223 223 / 50%)',height:'3px'}}>
            <div className='info-graph-bar' style={bar}></div>
          </div>


        </div>
     );
}

export default InfoGraph;