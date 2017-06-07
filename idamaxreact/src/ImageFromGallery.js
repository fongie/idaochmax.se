import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class ImageFromGallery extends Component {
    render() {
        const image = require(`../res/${this.props.tripid}/img/${this.props.date}/${this.props.match.params.bild}`);
        return (
            <div>
                <Image style={{width: '100%'}} src={image} />
            </div>
        );
    }
}

export default ImageFromGallery;
