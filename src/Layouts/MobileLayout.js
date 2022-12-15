import React from "react";
import { Async } from "react-async";
import AppBar from "../Elements/AppBar";
import DonatorsGrid from "../Elements/DonatorsGrid";
import ImageSlideshow from "../Elements/ImageSlideshow";
import getTotalAmountDonated from "../Helpers/getTotalAmountDonated";
import DonateButton from "../Components/DonateButton";
import "./../assets/style/style.scss";
import { useParams } from "react-router-dom";

const DesktopLayout = () => {
    let { teamId = ':0' } = useParams();
    return (
        <div className="layout">
            <DonateButton mobileMode={true} teamId={teamId} />
            <AppBar />
            <ImageSlideshow
                style={{ borderBottom: '60px solid #0c2359' }} />
            <video
                v-else
                controls
                id="video-slide"
                src={require("../assets/videos/2.mp4")}
                poster={require("../assets/images/thumbnail2.jpg")}
                style={{
                    width: "100%",
                    margin: "auto",
                    objectFit: "cover",
                }}
            />
            <div className="separator hebrew-text separator-text">
                לאחר מעל שני עשורים להקמתה של הישיבה, הולכים לקראת מבנה קבע לתורה ומדע.
                <br /> בנין הישיבה ולצידו מתחם הפנימייה בצמוד למרכז האקדמי לב
            </div>
            <div className="flex-box" style={{
                backgroundColor: "black",
            }}>
                <img src={require('../assets/images/logo.png')} style={{ width: "100%", objectFit: "contain" }} />
            </div>
            <div style={{ backgroundColor: "black" }}>
                <video
                    v-else
                    controls
                    id="video-slide"
                    src={require("../assets/videos/1.mp4")}
                    poster={require("../assets/images/thumbnail1.jpg")}
                    style={{
                        width: "100%",
                        margin: "auto",
                        objectFit: "cover",
                    }}
                />
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    fontFamily: "Assistant",
                    fontSize: "50px",
                    direction: "rtl",

                }}>בונים את היכלה של הישיבה!</h1>
            </div>
            <Async promiseFn={getTotalAmountDonated}>
                {({ data, error, isLoading }) => {
                    if (isLoading) return "Loading...";
                    if (error) return `Something went wrong: ${error.message}`;
                    if (data) {

                        let percentage = (data / (7000000 / 100)).toFixed(2);
                        let mask = `linear-gradient(to top, rgba(0, 0, 0, 1) ${percentage}%, rgba(0, 0, 0, 0.5) ${percentage}%)`;
                        return (
                            <div style={{ display: "flex", textAlign: "center" }}>\
                                <div style={{
                                    width: "60%",
                                    marginLeft: "5%",
                                    marginTop: "2.5%",
                                    position: "relative"
                                }}>
                                    <img
                                        style={{
                                            border: "7px solid #0c2359",
                                            width: "100%",
                                            objectFit: "contain",
                                            borderRadius: "7px",
                                            WebkitMaskImage: mask,
                                            maskImage: mask
                                        }}
                                        src={require('../assets/images/building.png')} />
                                    <h1
                                        style={{
                                            position: "absolute",
                                            bottom: "25%",
                                            left: "32%",
                                            fontSize: "25px",
                                            color: "black",
                                        }}
                                    >
                                        <span >{percentage}</span>%
                                    </h1>
                                </div>
                                <h1 style={{
                                    direction: "rtl",
                                    marginLeft: "11%",
                                    marginTop: "7%",
                                    fontSize: "1.5rem",
                                    textAlign: "center",
                                    color: "#0c2359",
                                }}>
                                    יעד הקמפיין:
                                    <br />
                                    <span style={{ fontSize: "2rem" }}>₪7,000,000</span>                                </h1>
                            </div>
                        );
                    }
                }}
            </Async >
            <div style={{ width: "100%", margin: "20px auto" }}>
                <DonatorsGrid />
            </div>
        </div >
    );
};
export default DesktopLayout;
