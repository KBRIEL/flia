import { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from './Logo.png'

function Search() {

    const[name, setName]= useState("Anonimus")
  return (
    <div className ="searchBar" >
      
     
           
       
 
            <form >
            
              <input className=" search" type="text"  width="1200px"></input>
            <button className="btnRadius" >Search</button>
            
       
            
            </form>
          
       
             
      
      

     
    </div>
  );
}

export default Search;