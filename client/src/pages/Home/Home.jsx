import React, { useRef, useState } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import "./Home.css";

const Home = () => {
    const [category, setCategory] = useState("All");


    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <div ref={homeRef}>
                <FoodDisplay category={category} />
            </div>
            <div ref={menuRef}>
                {/* Your Menu content */}
            </div>
            <div ref={mobileAppRef}>
                <AppDownload />
            </div>
        </div>
    );
};

export default Home;
