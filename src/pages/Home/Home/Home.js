import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import LatestOffers from '../LatestOffers/LatestOffers';
import ShowReview from '../ShowReview/ShowReview';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShowReview></ShowReview>
            <LatestOffers></LatestOffers>
            <Footer></Footer>
        </div>
    );
};

export default Home;