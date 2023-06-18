import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
                <Product 
                title="The lean startup" price={29.99}
                image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
                rating={5}
                />
                <Product 
                    id="1"
                    title="realme narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display"
                    price={8999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71HOERLKYqL._AC_SY200_.jpg"
                
                />
            </div>
            
            <div className="home__row">
            <Product 
                    id="2"
                    title="American Tourister 51 Cms Black Casual Backpack (Amt Fizz Sch Bag 03)(33Cms X 22Cms X 51Cms)"
                    price={1199}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41rujukbkwL._AC_SR400,600_.jpg"
                
            />
            
            <Product 
                    id="3"
                    title="Puma Unisex-Adult Duke Idp Running Shoe"
                    price={1579}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71E018D-UiL._AC_UL400_.jpg"
                
            />
            
            <Product 
                    id="4"
                    title=" Fastrack New Limitless FS1 Smart Watch|Biggest 1.95 Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Upto 5 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces "
                    price={2295}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SR400,600_.jpg"
                
            />
            

            </div>
            
            <div className="home__row">
            <Product 
                    id="5"
                    title=" Fastrack New Limitless FS1 Smart Watch|Biggest 1.95 Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Upto 5 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces "
                    price={2295}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71ppEGguYzL._SX522_.jpg"
                
            />
            </div>
            
        </div>
    </div>
  );
}

export default Home;