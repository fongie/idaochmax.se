import React, { Component } from 'react';
import { 
    Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    }

    renderThumbnails() {
        const tripinfo = require(`../res/${this.props.tripid}/tripinfo.json`);
        const thumbnails = tripinfo.dates.map((date, i) => {
            const post = require(`../res/${this.props.tripid}/blog/json/${date}.json`);
            const image = require(`../res/${this.props.tripid}/img/${date}/${post.info.thumbnail}`);
            return(
                <div key={i}>
                    <Link 
                        key={i}
                        to={`/${this.props.tripid}/${date}`}
                    >
                        <img 
                            src={image} 
                            alt="" 
                            key={i} 
                        />
                    </Link>
                </div>
            );
        });
        return thumbnails;
    }

    render() {
        return (
            <div>
                {this.renderThumbnails()}
            </div>
        );
    }
}

BlogOverview.propTypes = propTypes;

export default BlogOverview;
