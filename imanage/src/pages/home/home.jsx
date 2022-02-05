import React from 'react'
import Business from './business';
import "./home.css"

class Home extends React.Component{
      
      state = {
      business:[
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
      ]}

      render(){ 
            const {business} =  this.state;      
            return (
                  <div className="home">
                  <div className="gridLayout">

                              {business.map(business =>(
                                    <Business name={business.name} price={business.price} picture={business.picture}/>
                              ))}
                  </div>
                  </div>
            );
      };
}
export default Home;