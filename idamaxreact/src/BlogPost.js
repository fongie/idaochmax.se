import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BlogContent from './BlogContent';

/**
 * A blogpost is created and has a Header, an Author, and Content (images and text), the content
 * is passed on to BlogContent class which handles formatting
 */
const propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired, //json and object instead of string?
    author: PropTypes.string
};
const defaultProps = {
    author: '',
}

class BlogPost extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <BlogContent content={this.props.content} />
            </div>
        );
    }
}

BlogPost.propTypes = propTypes;
BlogPost.defaultProps = defaultProps;

export default BlogPost;
