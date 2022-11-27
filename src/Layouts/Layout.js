import React from "react";
import { Async } from "react-async";
import AppBar from "../Elements/AppBar";
import DonatorsGrid from "../Elements/DonatorsGrid";
import ImageSlideshow from "../Elements/ImageSlideshow";
import getPayments from "../Helpers/getPayments";
import getTotalAmountDonated from "../Helpers/getTotalAmountDonated";
import "./../assets/style/style.css";

const Layout = () => {
  return (
    <div className="layout">
      <AppBar />
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <ImageSlideshow style={{ width: "50%", float: "left" }} />
        <video
          v-else
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
      </div>
      <Async promiseFn={getTotalAmountDonated}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Loading...";
          if (error) return `Something went wrong: ${error.message}`;
          if (data)
            return (
              <div style={{ display: "flex", textAlign: "center" }}>
                <img
                  style={{
                    width: "30%",
                    objectFit: "contain",
                    marginLeft: "15%",
                    marginTop: "2.5%",
                    border: "7px solid #0c2359",
                    borderRadius: "7px",
                    maskImage: "linear-gradient(black 50%, transparent 50%)",
                    maskType: "alpha",
                  }}
                  src={require('../assets/images/building.png')} />
                <h1 style={{
                  direction: "rtl",
                  marginLeft: "11%",
                  marginTop: "7%",
                  fontSize: "70px",
                  color: "#0c2359",
                }}>
                  {(data / (7000000 / 100)).toPrecision(1)}%
                  <br /> מיעד הקמפיין
                </h1>
              </div>
            );
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
        <button
          style={{
            cursor: "pointer",
            fontWeight: "bolder",
            fontSize: "2rem",
            fontFamily: "Assistant",
            direction: "rtl",
          }}
          className="float"
        >
          היו שותפים!
        </button>
      </a>
    </div >
  );
};
export default Layout;
