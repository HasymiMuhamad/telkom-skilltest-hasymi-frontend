import React, { useState } from 'react';
import HeaderSearch from '../component/HeaderSearch/HeaderSearch';
import ListItem from '../component/ListItem/ListItem';
import axios from 'axios';
import './index.css';



const MyAppBasic = ()=>{
    const [searchValue, setSearchValue] = useState('');
    const [listData, setListData] = useState([])

    const handleOnchange = (e)=>{
        console.log('e target', e.target.value)
        setSearchValue(e.target.value)
    }

    const handleClick = ()=>{
        console.log('search value', searchValue)
        axios.get(`https://api.github.com/users/${searchValue}/repos`)
        .then(res => {
            console.log('response data', res.data)
            setListData(res.data)
        })
        .catch(error => {
            console.log('error response', error)
        })
    }


    return (
      <div className="main-app">
          <h1>My Github App</h1>
          <HeaderSearch
            onChange={handleOnchange}
            handleClick={handleClick}
          />
          <ListItem data={listData}/>
      </div>
    )
  }

export default MyAppBasic;