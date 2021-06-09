import './App.css';
import UserBar from './components/UserBar';
import TwitterBody from './components/TwitterBody';
import { useState } from 'react';
import Search from './components/Search';

function Twitter() {
  return (
    <div className="twitter">
     <UserBar/>
    
     <TwitterBody/>
    </div>
  );
}

export default Twitter;