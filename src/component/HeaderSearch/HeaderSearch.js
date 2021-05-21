import React from 'react';


const HeaderSearch = ()=>{
    return (
          <div className="header-search">
              <input 
                className="input-search" 
                type="text" id="search" 
                name="search" 
                placeholder="Type a Repository name" 
              />
              <button>Search</button>
          </div>
    )
  }

export default HeaderSearch;