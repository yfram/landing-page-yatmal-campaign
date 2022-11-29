import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const items = [
    { imageSource: require('./../assets/images/1.jpg') },
    { imageSource: require('./../assets/images/2.jpg') },
    { imageSource: require('./../assets/images/4.jpg') },
    { imageSource: require('./../assets/images/5.jpg') },
    { imageSource: require('./../assets/images/6.jpg') },
];

const ImageSlideshow = ({ style }) => {
    return (
        <Carousel sx={style} indicators={false} animation='slide'>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.imageSource} style={{
                width: "100%",
                objectFit: "contain",
            }} />
        </Paper>
    )
}

export default ImageSlideshow;