import React from 'react';
import Search from './Search';

const TopBar = props => {
    return(
        <div className='top-bar'>
            <h1 className="top-bar__title">Gif Search</h1>
            <Search onSearch={props.onSearch}/>
        </div>
    )
}

export default TopBar;