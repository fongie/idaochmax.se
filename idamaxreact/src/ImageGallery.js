import React, { Component } from 'react';
import Video from './Video';

//note needs a match object passed on from bildsida that has date params in it..
class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.renderImages = this.renderImages.bind(this);
        this.renderVideos = this.renderVideos.bind(this);
        const generalStyling = {
            listStyle: 'none',
            backgroundColor: '#0000',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
        };
        const thumbnailStyling = {
            position: 'relative',
            float: 'left',
            width: '500px',
            height: '300px',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        };
        const date = this.props.match.params.date;
        const imageListFile = require(`../res/${this.props.tripid}/allimages.json`)
        const imageList = imageListFile[date];
        this.state = {
            date,
            imageList, 
            generalStyling,
            thumbnailStyling,
        }
    }
    isVideo = (thing) => {
        if (thing.search('.mp4') > 0) {return true;}
        else if (thing.search('.mov') > 0) {return true;}
        else {return false;}
    }
    renderImages() {
        const thumbnails = this.state.imageList.map((item, i) => {
            if (this.isVideo(item)) {
                return "";
            }
            const image = require(`../res/${this.props.tripid}/img/${this.state.date}/${item}`);
            return(
                <div key={i}>
                    <li>
                        <div style={{...this.state.thumbnailStyling, backgroundImage: `url(${image})`}}>
                        </div>
                    </li>
                </div>
            );
        });
        return thumbnails.reverse();
    }
    renderVideos() {
        const vids = this.state.imageList.map((item, i) => {
            if (!this.isVideo(item)) {
                return "";
            }
            const video = require(`../res/${this.props.tripid}/img/${this.state.date}/${item}`);
            return(
                <div key={i}>
                    <li>
                        <div style={{...this.state.thumbnailStyling}}>
                            <Video src={video} />
                        </div>
                    </li>
                </div>
            );
        })
        return vids;
    }
    render() {
        return (
            <ul style={ this.state.generalStyling }>
                { this.renderImages() }
                { this.renderVideos() }
            </ul>
        );
    }
}

export default ImageGallery;
