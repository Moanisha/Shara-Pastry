import React, {Component} from 'react';
import { Button, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {login} from '../actions/users';

class App extends Component{
    state ={ username:'', password:''};

    componentDidUpdate(){
        if(this.props.user.user.isLoggedIn){
            this.props.history.push('home');
        }
    }

    updateUsername=event=>{
        this.setState({username: event.target.value})
    }

    updatePassword=event=>{
        this.setState({password: event.target.value})
    }

    onLoginClick = () => {
        const {username, password} = this.state;   
        this.props.login({username,password});
    }

    render(){  
        return(
            <div className="login-container">
                <h1>Login</h1>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder ="Username"
                        value={this.state.username}
                        onChange={this.updateUsername}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder ="Password"
                        value={this.state.password}
                        onChange={this.updatePassword}
                    />
                </FormGroup>
                <div>
                    <Button onClick={this.onLoginClick}>Login</Button>
                    <span>  OR  </span>
                    <Button onClick={this.signup}>Signup</Button>
                </div>
                <br/>
                <div>{this.props.user.user.message}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const user = state.userReducer;
    return {user};
}
  
export default connect(mapStateToProps, {login})(App);
