import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ImageGallery from './ImageGallery';

//TODO make setstate to show either gallery or the image clicked on
class BildSida extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        return (
            <div>
                <Col sm={10} smOffset={1}>
                    <h3>Bilder från {this.props.match.params.date}</h3>
                    <LinkContainer to={`/${this.props.tripid}/${this.props.match.params.date}`}>
                        <Button>Tillbaka</Button>
                    </LinkContainer>
                    <ImageGallery {...this.props} />
                </Col>
            </div>
        );
    }
}

export default BildSida;
