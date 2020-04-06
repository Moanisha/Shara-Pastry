import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import {saveWishList} from '../actions/favorites';
import {removeWishList} from '../actions/favorites';

const Product = (props) => {
    const product = props.product;
    
    const [fav, setFav] = useState(props.isFav);
    const toggle = () =>{
        setFav(!fav);
        if(fav){
            props.removeWishList({userId:props.userAndFavorite.userReducer.user.id, productId:product.id})
        } else {
            props.saveWishList({userId:props.userAndFavorite.userReducer.user.id, productId:product.id})
        }
    }

    return(
        <Card className="product-card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="200"
                image= {Buffer.from(product.image.data).toString('utf8')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" className="product-description" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            {
            (fav) ?
            <IconButton onClick={toggle} aria-label="add to favorites">
                <FavoriteIcon style={{fill: "#cc0000"}}/>
            </IconButton> 
            :
            <IconButton onClick={toggle} aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            }
            
            <div className="price">
                Rs.{product.price}
            </div>
            </CardActions>
        </Card>             
    )
}

const mapStateToProps = (state) => {
    const userAndFavorite = state;
    return {userAndFavorite};
}
  
export default connect(mapStateToProps, {saveWishList, removeWishList})(Product);
