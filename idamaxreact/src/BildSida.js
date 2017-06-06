import React, { Component } from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Video from './Video';

class BildSida extends Component {
    constructor(props) {
        super(props);
        this.renderImages = this.renderImages.bind(this);

        const date = this.props.match.params.date;
        const imageListFile = require(`../res/${this.props.tripid}/allimages.json`)
        const imageList = imageListFile[date];
        this.state = {
            date,
            imageList, 
        }
    }
    componentDidMount() {
        this.props.onMount();
    }
    renderImages() {
        const jsxItems = this.state.imageList.map(
            (item, i) => {
                const requiredItem = require(`../res/${this.props.tripid}/img/${this.state.date}/${item}`);
                let isVideo = (thing) => {
                    if (thing.search('.mp4') > 0) {return true;}
                    else if (thing.search('.mov') > 0) {return true;}
                    else {return false;}
                }
                if (isVideo(item)) {
                    return(
                        <Video src={requiredItem} key={i}/>
                    );}
                return (
                    <Image 
                        key={i} 
                        src={requiredItem} 
                        responsive
                        style={{margin: 'auto'}}
                    />);
            });
        return jsxItems;

    }
    render() {
        return (
            <div>
                <Col sm={10} smOffset={1}>
                <h3>Alla bilder från {this.state.date}</h3>
                <LinkContainer to={`/${this.props.tripid}/${this.state.date}`}>
                    <Button>Tillbaka</Button>
                </LinkContainer>
                { this.renderImages() }
            </Col>
            </div>
        );
    }
}

export default BildSida;
