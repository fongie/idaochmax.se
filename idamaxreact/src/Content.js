import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogHandler from './BlogHandler';

/**
 * The homepage body. Has an ID which corresponds to the folder name of the images and blogpost pertaining
 * to one trip (f.e sydam, or indo).
 */

const propTypes = {
    id: PropTypes.string.isRequired,
}

class Content extends Component {
    render() {
        return (
            <div>
                <p>Content</p>
                <BlogHandler id={this.props.id} />
            </div>
        );
    }
}

Content.propTypes = propTypes;

export default Content;
