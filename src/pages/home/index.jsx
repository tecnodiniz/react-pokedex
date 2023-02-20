import React, { useEffect, useState } from 'react';
import Card from '../../container/card';
import BigCard from '../../container/bigCard';
import { PokeContext } from '../../context/pokeContext';
import { get, getDetails } from '../../services/api';
import { Link } from 'react-router-dom';

import './index.css';
import FontAwesomeIcon from '../../components/fontawesome';

function Home() {
    
    const [pokemons,setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12)
    const [isSelect, setSelect] = useState(false);
    const [cardId, setCardId] = useState(1);
    const [details, setDetails] = useState({});
    const [pokeSearch, setPokeSearch] = useState('');
    
  



    useEffect(()=>{
        get().then(pokemon => setPokemons(pokemon));
        getDetails('https://pokeapi.co/api/v2/pokedex/1').then(response => setDetails(response))      
              
    },[]);

    const handleMore = () =>{
        setOffset(offset + limit);
        
    }
    const handlePokeClick = (id,pokemon) => {
        setSelect(true);
        setCardId(id);
        setPokemon(pokemon);
    }
    const handleBack = () =>{
        setSelect(false);

    }
    useEffect(() =>{
        if(!isSelect){
            if(cardId > 1){
                const element = document.getElementById(cardId - 1);
                if(element)
                    element.scrollIntoView({behavior:'smooth'});
            }
        }
        
    },[isSelect]);

    useEffect(() => {
        if(offset !== 0)
            if(pokemons.length !== 15)
                get(offset,limit).then(pokemonList =>  {
                    pokemonList.map(item => {return item.id > 151? pokemonList.splice(pokemonList.indexOf(item)):false})

                    setPokemons([...pokemons,...pokemonList])
                });
            else console.log("No Call");
            
    },[offset])

    return ( 
        <>
        
            { !isSelect ?
               <div className='container'>
   
               <div className='content'>
                    <div className='nav'>
                        <div className='nav-items'>
                            <div className='nav-brand'>
                                <img width={200} src={require('../../assets/img/pokemon-png-logo.webp')} alt="Pokédex with PokeAPI" />
                            </div>
                            <div className='nav-input'>
                                <input type='text'name='poke-search'
                                onChange={event => setPokeSearch(event.target.value)}
                                placeholder='Pokemon or Type' />
                                <Link to={`/teste/${pokeSearch}`}><button>Pesquisar</button></Link>
                                
                            </div>
                         
                        </div>

                    </div>

                   <ol className='content-list'>
                       {pokemons.map((item) =>
                        <li 
                        onClick={() => handlePokeClick(item.id,item)} 
                        id={item.id} 
                        key={pokemons.indexOf(item)}>
                        <Card pokemon={item}/>
                        </li> )}
                   </ol>
   
                   <button className='btn-more' onClick={handleMore}>More</button>
               </div>
   
           </div>
            
            :
            <div className='second-container'>
                
                <BigCard 
                pokemon={pokemon} 
                details={details}
                        
                        >
                    <div className='second-container-header'>
                        <button onClick={handleBack} >
                            <FontAwesomeIcon icon="fa-regular fa-arrow-left" />
                        </button>

                        <button>
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </button>
                     </div>
                </BigCard>
                
            </div>}
        
        </>
     
     );
}

export default Home;