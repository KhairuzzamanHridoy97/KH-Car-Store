import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import LatestOffers from '../LatestOffers/LatestOffers';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <LatestOffers></LatestOffers>
            <Footer></Footer>
        </div>
    );
};

export default Home;