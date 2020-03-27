import React, {Component} from 'react';
import SharaChatbot from './sharaChatbot';
import Product from './product';
import SearchBox from './searchBox';

class Home extends Component{
    render(){
        return(
            <div className="content-area">
                <SearchBox/>
                <Product/>
                <SharaChatbot/>
            </div>
        )
    }
}

export default Home;