import React, { useState } from 'react';
import CardIamge from '../../components/card-image';
import Carditems from '../../components/card-items';
import ImageGrid from '../../components/image-grid';
import InfoGraph from '../../components/info-graph';
import Panel from '../../components/panel';
import TabLink from '../../components/tab-link';
import TabPanel from '../../components/tab-panel';
import './index.css';


const Tabs = ({ tabs }) => {
 
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    const style_ul = {
        display:'grid',
        listStyle:'none',
        gridTemplateColumns:'1fr 1fr 1fr',
        lineHeight:'40px',
        textAlign:'center'
    }
    

    return (
        <div className="tabs">
            <div className="tab-links">
                {tabs.map(tab => (
                    <TabLink
                        key={tab.label}
                        label={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        isActive={tab.label === activeTab}
                    />
                ))}
            </div>
            <div className="tab-panels">
                {tabs.map((tab,i) => (
                    <TabPanel
                        key={tab.label}
                        isActive={tab.label === activeTab}
                    >
                        <p>{tab.content}</p>
                        

                        {i === 0 ?
                        <>
                        <Panel content={tab.content2}/> 

                        <h2 style={{marginBottom:'1rem'}}>Breeding</h2>
                        <Carditems title={"Eggs Group"} items={tab.content3}/>    
                        </>
                         :null}
                         {i === 1 ? <>
                         {tab.content2.map((item)=> 
                         <InfoGraph key={item.stat.name} 
                         label={item.stat.name} 
                         value={item.base_stat}/>)}

                         <Carditems title={"Abilities"} items={tab.content3} />
                        

                         </>: null}
                         
                         {i === 2 ? 
                         <ImageGrid>
                             {tab.content3.map((item)=>  <CardIamge path={item} width={"100px"} key={item} />)}
                         </ImageGrid>
                        
                          :null}

                          {i === 3?
                          <>
                          <ul style={style_ul}>
                            {tab.content2.map((item)=> <li key={item}>{item}</li>)}
                          </ul>
                        
                          </>
                          :null}

                    </TabPanel>
                ))}
            </div>
        </div>
    );
};
export default Tabs;
