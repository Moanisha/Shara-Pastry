import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';

const SortItem = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}> 
            <DropdownToggle className="sort-dropdown" caret>
                Sort By
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={(event)=>props.fetchProducts({columnName: event.currentTarget.textContent})}>Name</DropdownItem>
                <DropdownItem onClick={(event)=>props.fetchProducts({columnName: event.currentTarget.textContent})}>Price</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default connect(null, {fetchProducts})(SortItem);
