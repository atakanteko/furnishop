import React from 'react';

import Landing from "../components/home-page/Landing";
import Information from "../components/information/Information";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <div>
            <Landing />
            <Information />
            <Products />
        </div>
    );
};

export default Home;
