import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
    { imageSource: require('./../assets/images/1.jpg') },
    { imageSource: require('./../assets/images/2.jpg') },
    { imageSource: require('./../assets/images/4.jpg') },
    { imageSource: require('./../assets/images/5.jpg') },
    { imageSource: require('./../assets/images/6.jpg') },
    { imageSource: require('./../assets/images/7.jpg') },
];

const ImageSlideshow = () => {
    return <div style={{
        width: "100%",
        backgroundColor: "#f1c232",
    }}>
        <div style={{
            width: "80%",
            display: "block",
            margin: "auto",
        }}>
            <Slider autoplay={3000}>
                {slides.map((slide, index) => <div key={index}>
                    <img style={{
                        height: "200%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                    }} src={slide.imageSource} />
                </div>)}
            </Slider>
        </div>
    </div>
}

export default ImageSlideshow;

