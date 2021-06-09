import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter, Route  } from 'react';
import Twitter from './Twitter'

function App() {
  return (
    <div className="App">
         
         <BrowserRouter>
          <div className="App">
            <div>
               <Switch> 
                 <Route path="/" component={Twitter} />
                 {/* <Route path="/login" component={Login} />
                 <Route path="/register" component={SignUp} />
                 <Route path="/search?text=?" component={Search} /> 
                 <Route exact path='/user' component={Autor} /> */}
                
                 <Route path ="*" render = {() => <h1> NOT FOUND </h1>}/>
               </Switch>
             </div> 
       </div>
        
            </BrowserRouter> 




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
