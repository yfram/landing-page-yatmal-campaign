import { display } from "@mui/system";
import React from "react";
import { Async } from "react-async";
import AppBar from "../Elements/AppBar";
import DonatorsGrid from "../Elements/DonatorsGrid";
import ImageSlideshow from "../Elements/ImageSlideshow";
import getTotalAmountDonated from "../Helpers/getTotalAmountDonated";
import "./../assets/style/style.css";

const DesktopLayout = () => {
  return (
    <div className="layout">
      <button
        style={{
          cursor: "pointer",
          fontWeight: "bolder",
          fontSize: "2rem",
          fontFamily: "Assistant",
          direction: "rtl",
          zIndex: 100,
        }}
        className="float"
      >
        היו שותפים!
      </button>
      <AppBar />
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <ImageSlideshow style={{ width: "50%" }} />
        <video
          v-else="!isMobile"
          controls
          id="video-slide"
          src={require("../assets/videos/2.mp4")}
          poster={require("../assets/images/thumbnail2.jpg")}
          style={{
            width: "50%",
            margin: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="separator hebrew-text separator-text">
        לאחר מעל שני עשורים להקמתה של הישיבה, הולכים לקראת מבנה קבע לתורה ומדע.
        <br /> בנין הישיבה ולצידו מתחם הפנימייה בצמוד למרכז האקדמי לב
      </div>
      <div style={{
        display: "flex",
        backgroundColor: "black",
      }}>
        <img src={require('../assets/images/logo.png')} style={{ width: "45%", objectFit: "contain", float: "left", marginLeft: "2.5%" }} />
        <div style={{ width: "55%", marginTop: "2.5%" }}>
          <video
            v-else="!isMobile"
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
                  width: "30%",
                  marginLeft: "15%",
                  marginTop: "2.5%",
                  position: "relative",
                }}>
                  <img
                    className="loading-img"
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
                      bottom: "30%",
                      left: "32%",
                      fontSize: "3.5rem",
                      color: "black",
                    }}
                  >
                    <span >{percentage}</span>%
                  </h1>
                </div>
                <h1 style={{
                  direction: "rtl",
                  marginLeft: "10%",
                  marginTop: "7%",
                  fontSize: "60px",
                  color: "#0c2359",
                }}>
                  יעד הקמפיין:
                  <br />
                  <span style={{ fontSize: "100px" }}>₪7,000,000</span>
                </h1>
              </div>
            );
          }
        }}
      </Async >
      <div style={{ width: "100%", margin: "20px auto" }}>
        <DonatorsGrid />
      </div>
      <a
        href="https://meshulam.co.il/purchase?b=e097903b1fd2bd1ce0088bcba9b2a03c"
        target="_blank"
        rel="noreferrer"
      >
      </a>
    </div >
  );
};
export default DesktopLayout;
