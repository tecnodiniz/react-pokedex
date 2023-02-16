import React, { useEffect, useState } from 'react';
import { getDetails } from '../../services/api';
import CardImage from '../../components/card-image';


function Teste() {
    console.clear()
    const url = "https://pokeapi.co/api/v2/evolution-chain/1";

    const [pokemons, setPokemons] = useState([{name:''}])
    const [finish, setFinish] = useState(false)
    const [poke, setPoke] = useState([
        {name:'',sprites:{
            other: {
                'official-artwork':{
                    front_default:''}
                }
        }}
    ]);

    useEffect(()=>{

        getDetails(url).then(response =>{
            const { chain } = response;
            if(chain.evolves_to.length){
                if(chain.evolves_to[0].evolves_to.length){
                    setPokemons([
                        {name:chain.species.name },
                        {name:chain.evolves_to[0].species.name},
                        {name:chain.evolves_to[0].evolves_to[0].species.name}
            ]);
        }else setPokemons([{name:chain.species.name },
                        {name:chain.evolves_to[0].species.name}]);
            }
            else setPokemons([{name:chain.species.name}])
            setFinish(true)
        });
    },[])

useEffect(()=>{
    if(finish){
        get().then(response => {
            setPoke(response)
        })
    }
},[finish]) 

const get = () => {
   return Promise.all(pokemons.map(item => getDetails(`https://pokeapi.co/api/v2/pokemon/${item.name}`)))
}

    return ( 
        <div style={{backgroundColor:'white',height:'100vh', padding:'1rem'}}>
            {poke.map((item)=> <CardImage 
            path={item.sprites.other['official-artwork'].front_default}
            alt={item.name}
            width={"100px"}
            
            />)}
            

        </div>
     );
}

export default Teste;