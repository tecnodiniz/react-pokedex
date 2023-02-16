import React, { useEffect, useState } from 'react';
import CardId from '../../components/card-id';
import CardIamge from '../../components/card-image';
import CardName from '../../components/card-name';
import { getDetails } from '../../services/api';
import TypeList from '../../components/type-list';
import { handleTypeColor } from '../../utils/utils';
import Tabs from '../tabs';
import './index.css';



function BigCard(props) {
    
   
    const {id, name, types, sprites, height, weight, stats, abilities, moves} = props.pokemon;
    const sprite = sprites.other['official-artwork'].front_default;

    const { pokemon_entries } = props.details;
    const [pokeName, setPokeName] = useState([{name:''}]);
    const [pokemons, setPokemons] = useState([
        {name:'',sprites:{
            other: {
                'official-artwork':{
                    front_default:''}
                }
        }}
    ]);
    const [loadFinish, setLoadFinish] = useState(false);
    const [fullLoad, setFullLoad] = useState(false);

    const [tabs, setTabs] = useState([
        {label: 'About', content: '', content2:[
            {label:'Height', content:''},
            {label:'Weight', content:''}],
        content3:['']},

        { label: 'Base Stats', content:'', content2:[
            {base_stat:'', stat:
            {name:''}}],
        content3:['']},

        { label: 'Evolution', content: '', content2:[''], content3:['']},

        { label: 'Moves', content:[''], content2:[''] }
    ]);

    const cardColor = {
        backgroundColor: handleTypeColor(types[0].type.name)
    }

    useEffect(() => {
        const selected = pokemon_entries.find(pokemon => pokemon.pokemon_species.name === name)
        if(selected){
            const { pokemon_species} = selected;

            getDetails(pokemon_species.url).then(response =>{

                const { flavor_text_entries, egg_groups, evolution_chain} = response;

                getDetails(evolution_chain.url).then(response =>{
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
                    setLoadFinish(true)
                });


              
                setTabs(tabs.map((obj, i) => {
                    if(i === 0){
                        return{...obj, 
                            content:flavor_text_entries[10].flavor_text,
                            content2:obj.content2.map((innerObj,innerIndex)=>{
                                if(innerIndex === 0){
                                    return {...innerObj,content: `${height / 10} (cm)`};
                                }else if (innerIndex === 1){
                                    return {...innerObj,content:`${weight/10}kg`};
                                }return innerObj
                            }),
                            content3:egg_groups.map((item)=>item.name)
                         }
                    }else if(i === 1){
                        return {...obj, content2:stats,
                            content3:abilities.map((item)=>item.ability.name)
                    }
                    }else if(i === 3){
                        return {...obj, content2: moves.map((item)=> item.move.name)}
                    }
                    return obj
                }))
              
            });
        }
               
    },[]);

    useEffect(()=>{
    if(loadFinish){
        get().then(response => {
            setPokemons(response)
            setFullLoad(true);
        })
    }
},[loadFinish]);

useEffect(()=>{
    if(fullLoad){

        setTabs(tabs.map((obj,i)=>{
            if(i === 2){
                return{...obj,
                content2:pokemons.map((item)=>item.name),
                content3:pokemons.map((item)=>item.sprites.other['official-artwork'].front_default)
                
                
            }
            } return obj;
        }))
    }

 

},[fullLoad])

const get = () => {
    return Promise.all(pokemons.map(item => getDetails(`https://pokeapi.co/api/v2/pokemon/${item.name}`)))
 }

    return (
        <div className='bigCard_content' style={cardColor}>
            {props.children}
            <div className='bigCard_content_header'>
                <div className='bigCard_content_header_top'>
                    <div style={{'width':'50%'}} ><CardName name ={name} size="40px" /> </div>
                    <div style={{'width':'50%'}}><CardId id={id} /> </div>
                   
                </div>
        
                <div className='bigCard_content_header_list'>
                    <ol>
                        {/* <CardTypeList types={props.pokemon.types}/> */}
                        <TypeList types={types}/>
                    </ol>
                </div>

            </div>
 
            <div className="bigCard_content_body">
                <div className="bigCard_content_image">
                    <CardIamge path={sprite}
                    alt={name}
                    width={200}
                    />
                </div>
                <div className='bigCard_content_info'>
                        <Tabs tabs={tabs}/>
                </div>
          
            </div>

        </div>
    );
}

export default BigCard;