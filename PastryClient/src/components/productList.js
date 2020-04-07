import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import {getWishList} from '../actions/favorites';
import Product from './product';

class ProductList extends Component{
    componentDidMount(){
        const {fetchProducts} = this.props;
        fetchProducts();
        this.props.getWishList({userId: this.props.user.id});
    }

    render(){
        const products = this.props.products;
        const favorites = this.props.favorites;
        this.productsArray = [];
    
        if(products.products && favorites){
            products.products.map(product => {
                favorites.product.includes(product.id) ?
                    this.productsArray.push({isFav:true, product:product}):
                    this.productsArray.push({isFav:false, product:product})
            })
        }

        return(
            <div className="product-list">   
                {(this.productsArray ? this.productsArray: []).map(product => 
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
    const user = state.userReducer.user;
    return {products, favorites, user};
}
  
export default connect(mapStateToProps, {fetchProducts, getWishList})(ProductList);

// const componentConnector = connect(mapStateToProps, {fetchProduct});
// export default componentConnector(Product);