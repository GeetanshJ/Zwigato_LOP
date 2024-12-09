import React, { useRef, useState } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import "./Home.css";

const Home = () => {
    const [category, setCategory] = useState("All");

    const homeRef = useRef(null);
    const menuRef = useRef(null);
    const mobileAppRef = useRef(null);
    const contactUsRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === "home" && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "menu" && menuRef.current) {
            menuRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "mobile-app" && mobileAppRef.current) {
            mobileAppRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (section === "contact-us" && contactUsRef.current) {
            contactUsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

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
