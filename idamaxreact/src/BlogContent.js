import React, { Component } from 'react';

/**
 * Handles the content of a blog post, that is to say, the text and images and getting them to be
 * html and css.
 */
class BlogContent extends Component {
    render() {
        return (
            <div>
            <p>BlogContent</p>
            {this.props.content}
        </div>
        );
    }
}

export default BlogContent;
