import React, {Component} from 'react';
import SharaChatbot from './sharaChatbot';
import ProductList from './productList';
import SearchBox from './searchBox';
import SortItem from './sortItem';

class Home extends Component{
    render(){
        return(
            <div className="content-area">
                <div className="task-bar">
                    <SearchBox/>
                    <SortItem/>
                </div>
                <ProductList/>
                <SharaChatbot/>
            </div>
        )
    }
}

export default Home;