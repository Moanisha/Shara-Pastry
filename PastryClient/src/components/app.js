import React, {Component} from 'react';
import Home from './home';

class App extends Component{
    render(){
        return(
            <div>
                <nav className="nav-bar">
                    <img className="logo" src="../../assets/logo.png"></img>
                </nav>
                <Home/>
            </div>
        )
    }
}

export default App;