import { useState } from 'react';
import '../App.css';
import Logo from './Logo.png'

function TwitterCenter() {

    const[name, setName]= useState("Anonimus")
  return (
    <div className ="center" justify_content="center">
      
     <h4>Tweets</h4>
     <div className= "tweets">
       <a>Tweet 1</a>
       <br/>
       <a>hola soy el Tweet numero uno</a>
       <button className="radius">ir</button>
     </div>
     <div className= "tweets">
       <a>Tweet 2</a>
       <br/>
       <a>hola soy el Tweet numero dos</a>
       <button className="radius">ir</button>
     </div>
     <div className= "tweets">
       <a>Tweet 3</a>
       <br/>
       <a>hola soy el Tweet numero tres</a>
       <button className="radius">ir</button>
     </div>
     <div className= "tweets">
       <a>Tweet 4</a>
       <br/>
       <a>hola soy el Tweet numero cuatro</a>
       <button className="radius">ir</button>
     </div>
      

    
 
    
     
    </div>
  );
}

export default TwitterCenter;