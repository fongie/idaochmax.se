import React, { Component } from 'react';
import { 
    Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

/**
 * BlogOverview shows thumbnails (that link to the posts) of all blogposts in this trip ID
 */
const propTypes = {
    tripid: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
class BlogOverview extends Component {
    constructor(props) {
        super(props);
        this.renderThumbnails = this.renderThumbnails.bind(this);

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
    renderThumbnails() {
        const thumbnails = this.state.tripInfo.dates.map((date, i) => {
            const post = require(`../res/${this.props.tripid}/blog/json/${date}.json`);
            const image = require(`../res/${this.props.tripid}/img/${date}/${post.info.thumbnail}`);
            return(
                <Link 
                    key={i}
                    to={`/${this.props.tripid}/${date}`}
                >
                    <div style={{width: '500px', height:'400px', padding: '20px'}}>
                <li>
                    <div style={{height: '300px'}}>
                    <Image 
                        style={{maxWidth: '100%', maxHeight: '300px'}}
                        src={image} 
                        alt="" 
                        key={i} 
                        rounded
                    />
                    </div>
                        <h4>{post.info.title}</h4>
            </li>
        </div>
                </Link>
            );
        });
        return thumbnails.reverse();
    }
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
