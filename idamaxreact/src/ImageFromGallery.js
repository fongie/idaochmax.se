import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const propTypes = {
    tripid: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
};

const ImageFromGallery = (props) => {
    const image = require(`../res/${props.tripid}/img/${props.date}/${props.match.params.bild}`);
        return (
            <div>
                <Image style={{width: '100%'}} src={image} />
            </div>
        );
    }

ImageFromGallery.propTypes = propTypes;
export default ImageFromGallery;
