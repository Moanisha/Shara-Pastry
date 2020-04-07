import React, {Component} from 'react';
import {Button, Menu, MenuItem, ListItemIcon, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/users';
import {Redirect} from 'react-router-dom'

class NavBar extends Component{
    state = {anchorEl: null};
    render(){
        
        const handleClick = (event) => {
            this.setState({anchorEl: event.currentTarget});
        };

        const handleClose = () => {
            this.setState({anchorEl: null})
        };
        
        const logout =()=>{
            this.props.logout();
        }

        return(
            <nav className="nav-bar">
                <img className="logo" src="../../assets/logo.png"></img>
                <span>
                {this.props.user.user.isLoggedIn ? 
                <Button className="username" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    HI, {this.props.user.user.username}
                </Button> : ''}
                
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <FavoriteIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            <Link to="/wishlist">
                                Wishlist
                            </Link>
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography onClick={logout} variant="inherit">
                            <Link to="/">
                                Logout
                            </Link>
                        </Typography>
                    </MenuItem>
                    </Menu> 
                </span>
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    const user = state.userReducer;
    return {user};
}
  
export default connect(mapStateToProps, {logout})(NavBar);
