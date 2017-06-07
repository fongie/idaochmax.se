import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router';
import ImageGallery from './ImageGallery';
import ImageFromGallery from './ImageFromGallery';
import ImageCarousel from './ImageCarousel';
import { LinkContainer } from 'react-router-bootstrap';

//TODO make setstate to show either gallery or the image clicked on
class BildSida extends Component {
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        return (
            <div>
                <Col sm={12}>
                    <Button onClick={this.props.history.goBack}>Tillbaka</Button>
                    <LinkContainer to={`/${this.props.tripid}/${this.props.match.params.date}/bilder/bildspel`}>
                        <Button>Bildspel</Button>
                    </LinkContainer>
                    <Switch>
                        <Route 
                            exact 
                            path={`/${this.props.tripid}/${this.props.match.params.date}/bilder`}
                            render={
                                () => (
                                    <div>
                                        <h3>Bilder från {this.props.match.params.date}</h3>
                                        <ImageGallery {...this.props} />
                                    </div>
                                )}
                            >
                            </Route>
                            <Route
                                exact
                                path={`/${this.props.tripid}/${this.props.match.params.date}/bilder/bildspel`}
                                render={
                                    (props) => (
                                        <ImageCarousel
                                            tripid={this.props.tripid}
                                            date={this.props.match.params.date}
                                            {...props}
                                        />
                                    )}
                            >
                            </Route>
                            <Route
                                path={`/${this.props.tripid}/${this.props.match.params.date}/bilder/:bild`}
                                render={
                                    (props) => (
                                        <ImageFromGallery 
                                            tripid={this.props.tripid} 
                                            date={this.props.match.params.date} 
                                            {...props} 
                                        />
                                    )}
                                >
                                </Route>
                            </Switch>
                        </Col>
                    </div>
        );
    }
}

export default BildSida;
