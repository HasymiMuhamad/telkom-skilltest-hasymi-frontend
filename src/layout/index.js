import React from 'react';
import HeaderSearch from '../component/HeaderSearch/HeaderSearch';
import ListItem from '../component/ListItem/ListItem';
import './index.css';



const MyAppBasic = ()=>{
    return (
      <div className="main-app">
          <h1>My Github App</h1>
          <HeaderSearch/>
          <ListItem />
      </div>
    )
  }

export default MyAppBasic;