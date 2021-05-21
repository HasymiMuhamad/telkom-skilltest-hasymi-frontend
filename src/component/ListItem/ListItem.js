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
                                    <p className="item-title"><a className="item-title-text" href={item.html_url}>{item.name}</a></p>
                                    <p className="item-desc">{item.description}</p>
                                </div>
                            )
                        })
                    ) : (
                        <div className="item">
                            <p className="item-title">There is no repositories to be shown yet.</p>
                            <p className="item-desc">Make your first repositories yet or search another repository to be shown</p>
                        </div>
                    )
                }
            </div>
          </div>
    )
  }

export default ListItem;