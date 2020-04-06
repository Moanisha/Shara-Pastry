import React, {Component} from 'react';
import {useState} from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';

const SearchBox = (props) => {
    const [inputText, setInputText] = useState("");
    
    return(
        <div className="search-area">
            <input 
                className="search-text-box"
                type="text"
                onChange = {(e) => {setInputText(e.target.value)}}
            />
            <Button 
                className="search-button"
                onClick={() => props.fetchProducts({searchText: inputText})}
            > 
                Search
            </Button>
        </div>
    )
}

export default connect(null, {fetchProducts})(SearchBox);
