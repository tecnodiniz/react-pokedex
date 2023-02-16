import './index.css';

function TabPanel({children, isActive}) {
    return (  
        <div className={`tab-content ${isActive ? 'active' : ''}`}>
            {children}
         </div>
        
    );
}

export default TabPanel;