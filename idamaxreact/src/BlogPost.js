import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * A blogpost is created and has a Header, an Author, and Content (images and text), the content
 * is processed by formatContent(). All info (except trip id and date) is fetched from the posts json file.
 */
const propTypes = {
    tripid: PropTypes.string.isRequired,
    onMount: PropTypes.func,
};

const generalStyling = {
    fontSize: '16px',

};

class BlogPost extends Component {
    constructor(props) {
        super(props);
        const post = require(`../res/${this.props.tripid}/blog/json/${this.props.match.params.date}.json`);
        this.state = {
            post,
        }
        this.formatContent = this.formatContent.bind(this);
    }

    componentDidMount() {
        this.props.onMount();
    }

    formatContent() {
        const formattedContent = this.state.post.content.map((item, i) => {
            if (item.paragraph) {
                return <p key={i}>{item.paragraph}</p>;
            } else if (item.image) {
                const image = require(`../res/${this.props.tripid}/img/${this.props.match.params.date}/${item.image}`);
                return(
                    <Image 
                        src={image} 
                        alt="" 
                        key={i} 
                        responsive
                    />
                );
            } else if (item.video) {
                const video = require(`../res/${this.props.tripid}/img/${this.props.match.params.date}/${item.video}`);
                return(
                    <div style={{margin:'auto', padding: '2px', marginTop: '10px', marginBottom: '10px'}}>
                    <video style={{width:'100%'}} controls key={i}>
                        <source 
                            src={video} 
                            type="video/mp4" 
                        />
                    </video>
                </div>
                );
            }
            return '';
        });
        return formattedContent;
    }
    render() {
        return (
            <div style={generalStyling}>
                <Well>
                <LinkContainer to={`/${this.props.tripid}`}>
                    <Button>Tillbaka</Button>
                </LinkContainer>
                <h3>{this.state.post.info.title}</h3>
                {this.formatContent()}
                <p>Skrivet av {this.state.post.info.author}</p>
            </Well>
            </div>
        );
    }
}

BlogPost.propTypes = propTypes;

export default BlogPost;
