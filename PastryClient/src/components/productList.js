import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import {getWishList} from '../actions/favorites';
import Product from './product';

class ProductList extends Component{
    componentDidMount(){
        const {fetchProducts} = this.props;
        fetchProducts();
        this.props.getWishList({userId: 1});
    }

    render(){
        const products = this.props.products;
        const favorites = this.props.favorites;
        let productsArray = [];
        
        if(products.products && favorites){
            products.products.map(product => {
                favorites.product.includes(product.id) ?
                    productsArray.push({isFav:true, product:product}):
                    productsArray.push({isFav:false, product:product})
            })
        }

        console.log("products array", productsArray);

        return(
            <div className="product-list">   
                {(productsArray ? productsArray: []).map(product => 
                    <div key={product.product.id}>
                        <Product product={product.product} isFav={product.isFav} />
                    </div>
                )}
            </div>             
        )
    }
}

const mapStateToProps = (state) => {
    const products = state.productReducer;
    const favorites = state.favoriteReducer.product;
    return {products, favorites};
}
  
export default connect(mapStateToProps, {fetchProducts, getWishList})(ProductList);

// const componentConnector = connect(mapStateToProps, {fetchProduct});
// export default componentConnector(Product);