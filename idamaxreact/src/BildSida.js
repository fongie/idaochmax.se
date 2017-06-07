import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Switch, Route } from 'react-router';
import ImageGallery from './ImageGallery';
import ImageFromGallery from './ImageFromGallery';

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
                    <Button onClick={this.props.history.goBack}>Tillbaka</Button>
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
