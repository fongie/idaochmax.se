import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

/**
 * A blogpost is created and has a Header, an Author, and Content (images and text), the content
 * is processed by formatContent(). All info (except trip id and date) is fetched from the posts json file.
 */
const propTypes = {
    tripid: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

class BlogPost extends Component {
    constructor(props) {
        super(props);

        const post = require(`../res/${this.props.tripid}/blog/json/${this.props.date}.json`);
        this.state = {
            post,
        }
        this.formatContent = this.formatContent.bind(this);
    }

    formatContent() {
        const formattedContent = this.state.post.content.map((item, i) => {
            if (item.paragraph) {
                return <p key={i}>{item.paragraph}</p>;
            } else if (item.image) {
                const image = require(`../res/${this.props.tripid}/img/${this.props.date}/${item.image}`);
                return(
                    <Image 
                        src={image} 
                        alt="" 
                        key={i} 
                        responsive
                    />
                );
            } else if (item.video) {
                const video = require(`../res/${this.props.tripid}/img/${this.props.date}/${item.video}`);
                return(
                    <video controls key={i}>
                        <source 
                            src={video} 
                            type="video/mp4" 
                        />
                    </video>
                );
            }
            return '';
        });
        return formattedContent;
    }

    render() {
        return (
            <div>
                <h3>{this.state.post.info.title}</h3>
                {this.formatContent()}
                <p>Skrivet av {this.state.post.info.author}</p>
            </div>
        );
    }
}

BlogPost.propTypes = propTypes;

export default BlogPost;
