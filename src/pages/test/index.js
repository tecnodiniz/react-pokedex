import React, { useEffect, useState } from 'react';
import { get, getDetails } from '../../services/api';
import CardImage from '../../components/card-image';
import { useParams, useNavigate } from 'react-router-dom';
import BigCard from '../../container/bigCard';
import FontAwesomeIcon from '../../components/fontawesome';




function Teste(props) {
    const { name } = useParams();
    const redirect = useNavigate()
    const [details, setDetails] = useState({});
    const [pokemon, setPokemon] = useState([]);
    const [isOn, setIsOn] = useState(false);
    
    useEffect(()=>{
        getDetails('https://pokeapi.co/api/v2/pokedex/1').then(response => setDetails(response))
        // getDetails(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => setPokemon(response))
        get().then(response => {
            setPokemon(response)
            setIsOn(true);
        });
        
    },[])
    const get = () =>{
        return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) =>{
            if(response.status !== 404)
                return response.json()
            else
            return redirect("/");
        })
    }
    const backToHome = () =>{
        redirect("/");
    }
    return ( 
        <>
        {isOn &&
            <BigCard 
                pokemon={pokemon} 
                details={details}
                        
            >
            <div className='second-container-header'>
                <button onClick={backToHome}>
                    <FontAwesomeIcon icon="fa-regular fa-arrow-left" />
                </button>

                <button>
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                </button>
            </div>
            </BigCard>
        }

        
        </>
     );
}

export default Teste;