import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../assets/style/style.css';

const slides = [
    { imageSource: require('./../assets/images/1.jpg') },
    { imageSource: require('./../assets/images/2.jpg') },
    { imageSource: require('./../assets/images/4.jpg') },
    { imageSource: require('./../assets/images/5.jpg') },
    { imageSource: require('./../assets/images/6.jpg') },
    { imageSource: require('./../assets/images/7.jpg') },
];

const ImageSlideshow = ({ style }) => {
    return <div style={style}>
        <Slider autoplay={3000}>
            {slides.map((slide, index) => <div key={index}>
                <img style={{
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%',
                }} src={slide.imageSource} />
            </div>)}
        </Slider>
    </div>
}

export default ImageSlideshow;

