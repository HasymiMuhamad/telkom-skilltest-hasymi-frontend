import React from 'react';


const ListItem = ({data})=>{
    return (
          <div className="main-list">
            <div className="list-item">
                {
                    data.map(item =>{
                        return (
                            <div className="item">
                                <p className="item-title">{item.name}</p>
                                <p className="item-desc">{item.description}</p>
                            </div>
                        )
                    })
                }

              {/* <div className="item">
                <p className="item-title">AJV-Validate</p>
                <p className="item-desc">Use AJV to validate data</p>
              </div>
  
              <div className="item">
                <p className="item-title">AJV-Validate</p>
                <p className="item-desc">Use AJV to validate data</p>
              </div> */}
  
            </div>
          </div>
    )
  }

export default ListItem;