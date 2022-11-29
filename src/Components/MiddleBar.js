import React from "react";

const MiddleBar = () => {
  return (<div className="flex-box" style={{
    backgroundColor: "black"
  }}>
    <img src={require('../assets/images/logo.png')} style={{
      width: "45%",
      objectFit: "contain",
      float: "left",
      marginLeft: "2.5%"
    }} />
    <div style={{
      width: "55%",
      marginTop: "2.5%"
    }}>
      <video v-else="!isMobile" controls id="video-slide" src={require("../assets/videos/1.mp4")} poster={require("../assets/images/thumbnail1.jpg")} style={{
        width: "100%",
        margin: "auto",
        objectFit: "cover"
      }} />
      <h1 style={{
        color: "white",
        textAlign: "center",
        fontFamily: "Assistant",
        fontSize: "50px",
        direction: "rtl"
      }}>בונים את היכלה של הישיבה!</h1>
    </div>
  </div>);
}

export default MiddleBar;

