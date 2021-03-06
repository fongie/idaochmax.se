import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogOverview from './BlogOverview';
import BlogPost from './BlogPost';
import ImagesPage from './ImagesPage';
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
            location: { location },
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
                    <Col xsHidden smHidden md={2}>
                        { this.state.showingLeftPanel && <BlogOverview isNavBar={true} tripid={this.props.match.params.tripid} /> }
                    </Col>
                    <Col xs={12} md={8}>
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
                                path={`/${this.props.match.params.tripid}/:date/bilder`}
                                render={
                                    (props) => (
                                        <ImagesPage
                                            {...props}
                                            tripid={this.props.match.params.tripid}
                                            onMount={this.showLeftPanel}
                                        /> 
                                    )}
                                />
                                <Route
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
