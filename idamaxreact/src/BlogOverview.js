import React, { Component } from 'react';
import { 
    Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Image } from 'react-bootstrap';

/**
 * BlogOverview shows thumbnails (that link to the posts) of all blogposts in this trip ID
 */
const propTypes = {
    tripid: PropTypes.string.isRequired
}
class BlogOverview extends Component {
    constructor(props) {
        super(props);
        this.renderThumbnails = this.renderThumbnails.bind(this);
        this.getEveryOtherObject = this.getEveryOtherObject.bind(this);

        const tripInfo = require(`../res/${this.props.tripid}/tripinfo.json`);
        const blogOverviewStyling = {
            listStyle: 'none',
            backgroundColor: '#0000',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
        };
        this.state = {
            tripInfo,
            blogOverviewStyling,
        }
    }

    //first item should be 0 or 1 for even or odd items
    getEveryOtherObject(array, firstitem) {
        const newArray = array.filter((item, i) => {
            if (i % 2 === firstitem) {
                return true;
            }
            return false;
        });
        return newArray;
    }

    renderThumbnails() {
        const thumbnails = this.state.tripInfo.dates.map((date, i) => {
            const post = require(`../res/${this.props.tripid}/blog/json/${date}.json`);
            const image = require(`../res/${this.props.tripid}/img/${date}/${post.info.thumbnail}`);
            return(
                <Link 
                    key={i}
                    to={`/${this.props.tripid}/${date}`}
                >
                <li style={{maxWidth: '600', padding: '20'}}>
                    <Image 
                        style={{width: '100%'}}
                        src={image} 
                        alt="" 
                        key={i} 
                        circle
                    />
                        <p>{post.info.title}</p>
            </li>
                </Link>
            );
        });
        return thumbnails;
    }

        /*
        return(
            <Row>
                <Col xs={12} md={6}>
                    <ul style={{listStyle: 'none'}}>
                    {this.getEveryOtherObject(thumbnails, 0)}
                </ul>
                </Col>
                <Col xs={12} md={6}>
                    <ul style={{listStyle: 'none'}}>
                    {this.getEveryOtherObject(thumbnails, 1)}
                </ul>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div style={ this.state.blogOverviewStyling }>
                <Grid>
                    {this.renderThumbnails()}
                </Grid>
            </div>
        );
    }
        */
    render() {
        return (
            <div>
                <ul style={ this.state.blogOverviewStyling }>
                    {this.renderThumbnails()}
                </ul>
            </div>
        );
    }
}

BlogOverview.propTypes = propTypes;

export default BlogOverview;
