import React from 'react'

const Business=({name,price,picture}) =>{
      return (
                  <div className="grid">
                              <a href="/store"> 
                                    <img src={picture} alt="business"></img>
                              </a>
                              <div className="overlay">
                                    <div className="businessNameText">{name}</div>
                                    <div className="businessPriceText">{price}</div>
                              </div>
                  </div>            
      );
};

export default Business;