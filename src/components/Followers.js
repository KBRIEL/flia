import { useState } from 'react';
import '../App.css';
import Logo from './Logo.png'

function Followers() {

    const[name, setName]= useState("Anonimus")
  return (
    <div className="followers" >
      
     <a>LISTA DE SEGUIDORES </a>
      
     
    </div>
  );
}

export default Followers;