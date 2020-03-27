import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';


class Product extends Component{
    componentDidMount(){
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    render(){
        const products = this.props.products;
        console.log("products", products)
        const status = products.status;
        delete products.status; 
         
        return(
        <div className="product-list">   
            {(products.products? products.products: []).map(product => 
            <div key={product.id}>
                <Card className="product-card">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
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
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
            )}
            </div>             
        )
    }
}

const mapStateToProps = (state) => {
    const products = state.productReducer;
    return {products};
}
  
export default connect(mapStateToProps, {fetchProducts})(Product);

// const componentConnector = connect(mapStateToProps, {fetchProduct});
// export default componentConnector(Product);