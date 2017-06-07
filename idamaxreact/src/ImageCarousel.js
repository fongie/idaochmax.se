import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Video from './Video';

class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.renderCarouselImages = this.renderCarouselImages.bind(this);
        const itemInsideCarouselStyling = {
            maxWidth: '1200px',
            maxHeight: '800px',
            margin: 'auto',
        };

        const date = this.props.date;
        const imageListFile = require(`../res/${this.props.tripid}/allimages.json`)
        const imageList = imageListFile[date];
        this.state = {
            date,
            imageList, 
            itemInsideCarouselStyling,
        }
    }
    isVideo = (thing) => {
        if (thing.search('.mp4') > 0) {return true;}
        else if (thing.search('.mov') > 0) {return true;}
        else {return false;}
    }
    renderCarouselImages() {
        const carouselItems = this.state.imageList.map((item, i) => {
            const requiredItem = require(`../res/${this.props.tripid}/img/${this.state.date}/${item}`);
            return(
                <Carousel.Item key={i}>
                    { this.isVideo(item) ? <Video src={requiredItem} /> : <Image alt="" src={requiredItem} style={{...this.state.itemInsideCarouselStyling}} /> }
                </Carousel.Item>
            );
        });
        return carouselItems;
    }
    render() {
        return (
            <div>
                <Carousel>
                    { this.renderCarouselImages() }
                </Carousel>
            </div>
        );
    }
}

export default ImageCarousel;
