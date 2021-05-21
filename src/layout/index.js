import React, { useState } from 'react';
import HeaderSearch from '../component/HeaderSearch/HeaderSearch';
import ListItem from '../component/ListItem/ListItem';
import './index.css';



const MyAppBasic = ()=>{
    const [searchValue, setSearchValue] = useState('');

    const handleOnchange = (e)=>{
        console.log('e target', e.target.value)
        setSearchValue(e.target.value)
    }

    const handleClick = ()=>{
        console.log('search value', searchValue)
    }


    return (
      <div className="main-app">
          <h1>My Github App</h1>
          <HeaderSearch
            onChange={handleOnchange}
            handleClick={handleClick}
          />
          <ListItem />
      </div>
    )
  }

export default MyAppBasic;