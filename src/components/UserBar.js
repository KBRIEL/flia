import { useState } from 'react';
import '../App.css';
import logo2 from './logo2.png';
import Logo from './Logo.png';
import Search from './Search'

function UserBar() {

    const[name, setName]= useState("Anonimus")
  return (
    <div className ="ubar" >
      
      <div className="center">
              
           <img className="radius" src={logo2} width="15%" alt="logo" />  
           <img className="foto" src={Logo} width="10%" alt="logo" />  
           
      </div>
           
  
       
 
    
            <Search/>
            
            
       
            
    
            <div>
              <img  className="right"  src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" width="20%"/>
              <h4 className="right"  >{name}</h4> 
              
            </div>
              
            
       
             
      
      
{/* 
       <div className ="left">
             <img  src={Logo} width = "50%" alt="logo" /> 
       </div>
 
       <div className = "letf2" width="1200px"  >
            <input className="center"type="text"  width="900px"></input>
            <button>Search</button>
       </div>
        
        <div className="right">
             <img  className="right" src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" width="9%"/>
       <h4 className="right" >{name}</h4>
        </div> */}
     
    </div>
  );
}

export default UserBar;