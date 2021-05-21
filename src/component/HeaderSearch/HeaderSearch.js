import React from 'react';


const HeaderSearch = ({onChange, handleClick})=>{
    return (
          <div className="header-search">
              <input 
                className="input-search" 
                type="text" id="search" 
                name="search" 
                placeholder="Type a Repository name" 
                onChange={onChange}
              />
              <button onClick={handleClick}>Search</button>
          </div>
    )
  }

export default HeaderSearch;