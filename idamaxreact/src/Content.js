import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogOverview from './BlogOverview';
import BlogPost from './BlogPost';
import BildSida from './BildSida';
import { Row, Col } from 'react-bootstrap';

/**
 * The content to be displayed.
 * Either a Blog overview with thumbnails, or a blog post
 * Must be routed with react-router, to find its trip id to fetch stuff from, using react-routers match object.
 */

const propTypes = {
    match:  PropTypes.object.isRequired,
}
class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingLeftPanel: false,
        };
        this.showLeftPanel = this.showLeftPanel.bind(this);
    }

    showLeftPanel  = () => {
        this.setState(
            {showingLeftPanel : true } )
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs={2}>
                        { this.state.showingLeftPanel && <BlogOverview isNavBar={true} tripid={this.props.match.params.tripid} /> }
                    </Col>
                    <Col xs={8}>
                        <Switch>
                            <Route 
                                exact={true}
                                path={`/${this.props.match.params.tripid}`}
                                render={
                                    () => ( 
                                        <BlogOverview 
                                            tripid={this.props.match.params.tripid} 
                                        />)
                                } 
                            />
                            <Route
                                location={this.props.location}
                                key={this.props.location.key}
                                path={`/${this.props.match.params.tripid}/:date/bilder`}
                                render={
                                    (props) => (
                                        <BildSida
                                            {...props}
                                            tripid={this.props.match.params.tripid}
                                            onMount={this.showLeftPanel}
                                        /> 
                                    )}
                                />
                                <Route
                                    location={this.props.location}
                                    key={this.props.location.key}
                                    path={`/${this.props.match.params.tripid}/:date`}
                                    render={
                                        (props) => (
                                            <BlogPost 
                                                {...props}
                                                tripid={this.props.match.params.tripid}
                                                onMount={this.showLeftPanel}
                                            />
                                        )}
                                    />
                                </Switch>
                            </Col>
                        </Row>
                    </div>
        );
    }
}

Content.propTypes = propTypes;

export default Content;
