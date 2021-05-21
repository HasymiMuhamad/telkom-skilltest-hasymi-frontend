import React from 'react';


const ListItem = ({data})=>{
    return (
          <div className="main-list">
            <div className="list-item">
                {
                    data.length > 0 ? (
                        data.map(item =>{
                            return (
                                <div className="item">
                                    <p className="item-title">{item.name}</p>
                                    <p className="item-desc">{item.description}</p>
                                </div>
                            )
                        })
                    ) : (
                        <div className="item">
                            <p className="item-title">There is no repositories yet.</p>
                            <p className="item-desc">Make your first repositories yet.</p>
                        </div>
                    )
                }
            </div>
          </div>
    )
  }

export default ListItem;