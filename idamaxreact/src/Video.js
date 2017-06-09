import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    src: PropTypes.string.isRequired,
};

const Video = (props) => {
        return (
            <div>
                <video style={{width:'100%'}} controls >
                    <source 
                        src={props.src} 
                        type="video/mp4" 
                    />
                </video>
            </div>
        );
    }

Video.propTypes = propTypes;
export default Video;
