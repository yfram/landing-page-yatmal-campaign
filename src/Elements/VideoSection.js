import { height } from "@mui/system";
import React from "react";
import Slider from "react-animated-slider";

const slides = [
  {
    posterSource: require("../assets/images/thumbnail2.jpg"),
    videoSource: require("../assets/videos/2.mp4"),
  },
  {
    posterSource: require("../assets/images/thumbnail1.jpg"),
    videoSource: require("../assets/videos/1.mp4"),
  },
  {
    posterSource: require("../assets/images/thumbnail2.jpg"),
    videoSource: require("../assets/videos/2.mp4"),
  },
  {
    posterSource: require("../assets/images/thumbnail1.jpg"),
    videoSource: require("../assets/videos/1.mp4"),
  },
];

const VideoSection = () => {
  return (
    <div className="videos">
      <div>
        <img
          src={require("./../assets/images/logo.png")}
          style={{ maxWidth: "80%" }}
        />
      </div>
      <div>
        <Slider onSlideChange={event => {
          document.getElementById("video-slide").pause();
        }}>
          {slides.map((slide, index) => (
            <div key={index}>
              <video
                v-else
                controls
                id="video-slide"
                src={slide.videoSource}
                poster={slide.posterSource}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              ></video>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSection;
