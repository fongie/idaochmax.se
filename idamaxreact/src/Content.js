import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogOverview from './BlogOverview';
import BlogPost from './BlogPost';
import { Row, Col } from 'react-bootstrap';

//TODO: issue: when you f5 reload on a blog post, the left nav bar is hidden, it should show
//
//TODO: issue: left nav bar icons not working cause its not being passed props.
// make layout change with state instead, so that the same blogoverview
// comp move from center to side, instead of rendering a new one

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
        this.hideLeftPanel = this.hideLeftPanel.bind(this);
    }

    showLeftPanel  = () => {
        this.setState(
            {showingLeftPanel : true } )
    }
    hideLeftPanel  = () => {
        this.setState(
            {showingLeftPanel : false } )
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={2}>
                        { this.state.showingLeftPanel && <BlogOverview tripid={this.props.match.params.tripid} /> }
                    </Col>
                    <Col md={6} mdOffset={1}>
                        <Switch>
                            <Route 
                                exact={true}
                                path={`/${this.props.match.params.tripid}`}
                                render={
                                    () => ( 
                                        <BlogOverview 
                                            tripid={this.props.match.params.tripid} 
                                            onClick={ this.showLeftPanel }
                                        />)
                                } 
                            />
                            <Route
                                location={this.props.location}
                                key={this.props.location.key}
                                path={`/${this.props.match.params.tripid}/:date`}
                                render={
                                    (props) => (
                                        <BlogPost 
                                            {...props}
                                            onClick={this.hideLeftPanel}
                                            tripid={this.props.match.params.tripid}
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
