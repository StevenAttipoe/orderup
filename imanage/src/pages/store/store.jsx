import React,{useState} from 'react'
import "./store.css"

const Store = () => {
      const [products] = useState([
                  {
                        name: 'Ogelewele',
                        price: 'GH12 - GH15',
                        picture: 'https://pbs.twimg.com/media/EgDRlKXXYAIqJRM.jpg:large'
                  },
                  {
                        name: 'Pepsi',
                        price: 'GH5',
                        picture: 'https://order-pizza-online.com/wp-content/uploads/2020/05/pepsi-1-scaled.jpeg'
                  },
                  {
                        name: 'Smoochies Bakes',
                        price: 'GH50 - GH500',
                        picture: 'https://pbs.twimg.com/profile_images/1103035188844683265/igY_7y9J_400x400.jpg'
                  },
                  {
                        name: 'Negus Connect',
                        price: 'GH50+',
                        picture: 'https://pbs.twimg.com/profile_images/1371864049978376193/tAafoSmv_400x400.jpg'
                  },
                  {
                        name: 'Ogelewele',
                        price: 'GH12 - GH15',
                        picture: 'https://pbs.twimg.com/media/EgDRlKXXYAIqJRM.jpg:large'
                  },
                  {
                        name: 'Pepsi',
                        price: 'GH5',
                        picture: 'https://order-pizza-online.com/wp-content/uploads/2020/05/pepsi-1-scaled.jpeg'
                  },
                  {
                        name: 'Smoochies Bakes',
                        price: 'GH50 - GH500',
                        picture: 'https://pbs.twimg.com/profile_images/1103035188844683265/igY_7y9J_400x400.jpg'
                  },
                  {
                        name: 'Negus Connect',
                        price: 'GH50+',
                        picture: 'https://pbs.twimg.com/profile_images/1371864049978376193/tAafoSmv_400x400.jpg'
                  },
                  {
                        name: 'Ogelewele',
                        price: 'GH12 - GH15',
                        picture: 'https://pbs.twimg.com/media/EgDRlKXXYAIqJRM.jpg:large'
                  },
                  {
                        name: 'Pepsi',
                        price: 'GH5',
                        picture: 'https://order-pizza-online.com/wp-content/uploads/2020/05/pepsi-1-scaled.jpeg'
                  },
                  {
                        name: 'Smoochies Bakes',
                        price: 'GH50 - GH500',
                        picture: 'https://pbs.twimg.com/profile_images/1103035188844683265/igY_7y9J_400x400.jpg'
                  },
                  {
                        name: 'Negus Connect',
                        price: 'GH50+',
                        picture: 'https://pbs.twimg.com/profile_images/1371864049978376193/tAafoSmv_400x400.jpg'
                  }
            ]);

            return (
                  <div className="storeMain">
                        <div className="storeHeader">
                              <div className="banner">
                                    <div className ="bannerBg">
                                          <img src="https://pbs.twimg.com/profile_banners/1000875937519558657/1626873646/1500x500" alt="header-gb"></img>
                                    </div>
                                    <div className="bannerOverlay"> 
                                          <img src="https://pbs.twimg.com/profile_images/1215962171840106497/Gz4DmrDd_400x400.jpg" alt="profile"></img>
                                    </div>
                              </div>
                              <div className="storeSocials">
                                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="twitter"></img>
                                    <img src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png" alt="instagram"></img> 
                                    

                              </div>
                              <div className="storeName">
                                    <div className="storeNameSpan">
                                          <span>Ogelewele</span>
                                    </div>
                                    
                              </div>
                              <div className="storeDetails">
                                    <div className="storeDetailsBox">
                                          <div className="storeDetailsProducts">
                                                <span>200k </span>
                                                <span>Products</span>
                                          </div>
                                          <div className="storeDetailsOrders">
                                                <span> 10K </span>
                                                <span>Orders</span>
                                          </div>
                                          
                                    </div>
                                    
                              </div>
                              <div className="storeAbout">
                                    <div className="storeAboutText">
                                          <span>Who no dey like kelewele? Yellow heart Fire Dm to place orders or have us at your event! Contact: 0596058725</span>
                                    </div>
                              </div>

                        </div>

                        <div className="storeBody">
                              <div className="storeGridLayout">
                              
                                    {products.map(products => (
                                          <div className="storeGrid">
                                                <a href="/product">
                                                      <img src={products.picture} alt="product"></img>
                                                 </a>
                                                <div className="productOverlay">
                                                      <div className="productNameText">{products.name}</div>
                                                      <div className="productPriceText">{products.price}</div>
                                                </div>    
                                          </div>
                                    ))}
                                    
                              </div>
                        </div>
                  </div>
            );
}
export default Store;


