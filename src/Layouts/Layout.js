import { Button } from "@mui/material";
import React from "react";
import AmountDonated from "../Elements/AmountDanated";
import AppBar from "../Elements/AppBar";
import DonatorsGrid from "../Elements/DonatorsGrid";
import ImageSlideshow from "../Elements/ImageSlideshow";
import VideoSection from "../Elements/VideoSection";
import './../assets/style/style.css';


const Layout = () => {
    return (
        <div className="layout">
            <AppBar />
            <ImageSlideshow />
            <div  className="separator hebrew-text separator-text">
                לאחר מעל שני עשורים להקמתה של הישיבה, הולכים לקראת מבנה קבע לתורה ומדע.<br /> בנין הישיבה ולצידו מתחם הפנימייה בצמוד למרכז האקדמי לב
            </div>
            <VideoSection />
            {/* <AmountDonated /> */}
            <div className="separator"></div>
            <div style={{width: "80%", margin: "auto"}}>
                <DonatorsGrid />
            </div>
            <a href="https://meshulam.co.il/purchase?b=e097903b1fd2bd1ce0088bcba9b2a03c" target="_blank" rel="noreferrer">
                <button style={{ cursor: 'pointer', fontWeight: "bolder", fontSize: "2rem", fontFamily: "Assistant" }} className="float">
                    !תרמו עכשיו
                </button>
            </a>
        </div>
    );
}
export default Layout;

