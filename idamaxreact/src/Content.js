import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogOverview from './BlogOverview';
import BlogPost from './BlogPost';
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
            showLeftPanel: false,
        };
        this.renderRoutes = this.renderRoutes.bind(this);
        this.toggleLeftPanel = this.toggleLeftPanel.bind(this);
    }

    toggleLeftPanel  = () => {
        const currentShowPanel = this.state.showLeftPanel;
        this.setState(
            {showLeftPanel : !currentShowPanel } )
    }

    renderRoutes() {
        const tripinfo = require(`../res/${this.props.match.params.tripid}/tripinfo.json`);
        const routes = tripinfo.dates.map((date, i) => (
            <Route
                key={i}
                path={`/${this.props.match.params.tripid}/${date}`}
                render={
                    () => (
                        <BlogPost 
                            tripid={this.props.match.params.tripid} 
                            date={date} 
                            onClick={this.toggleLeftPanel}
                        />)
                }
            />
        )
        );
        return routes;
    }
    render() {
        return (
            <div>
                <Row>
                    <Col md={2}>
                        { this.state.showLeftPanel && <BlogOverview tripid={this.props.match.params.tripid} /> }
                    </Col>
                    <Col md={8}>
                        <Switch>
                            <Route 
                                exact={true}
                                path={`/${this.props.match.params.tripid}`}
                                render={
                                    () => ( 
                                        <BlogOverview 
                                            tripid={this.props.match.params.tripid} 
                                            onClick={ this.toggleLeftPanel }
                                        /> )
                                } 
                            />
                            {this.renderRoutes()}
                        </Switch>
                    </Col>
                </Row>
            </div>
        );
    }
}

Content.propTypes = propTypes;

export default Content;
