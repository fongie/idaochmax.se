import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Video from './Video';
import { Image, Button, Well, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * A blogpost is created and has a Header, an Author, and Content (images and text), the content
 * is processed by formatContent(). All info (except trip id and date) is fetched from the posts json file.
 */
const propTypes = {
    tripid: PropTypes.string.isRequired,
    onMount: PropTypes.func,
    match: PropTypes.object.isRequired,
};

const generalStyling = {
    fontSize: '1.5em',
    padding: '1em',
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
                return <p key={i} style={{marginTop: '20px', marginBottom: '20px'}}>{item.paragraph}</p>;
            } else if (item.image) {
                const image = require(`../res/${this.props.tripid}/img/${this.props.match.params.date}/${item.image}`);
                return(
                    <Image 
                        style={{marginLeft: 'auto', marginRight: 'auto'}}
                        src={image} 
                        alt="" 
                        key={i} 
                        responsive
                    />
                );
            } else if (item.video) {
                const video = require(`../res/${this.props.tripid}/img/${this.props.match.params.date}/${item.video}`);
                return <Video 
                    src={video} 
                    key={i} 
                    style={{margin:'auto', padding: '1em', marginTop: '10px', marginBottom: '10px'}}
                    />;
            }
            return '';
        });
        return formattedContent;
    }
    render() {
        return (
            <div style={generalStyling}>
                <Row>
                    <Col xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <Well>
                            <LinkContainer to={`/${this.props.tripid}`}>
                                <Button>Tillbaka</Button>
                            </LinkContainer>

                            <LinkContainer to={`${this.props.match.url}/bilder`}>
                                <Button>Bilder</Button>
                            </LinkContainer>

                            <h3>{this.state.post.info.title}</h3>
                            {this.formatContent()}
                            <p>Skrivet av {this.state.post.info.author}</p>

                            <LinkContainer to={`/${this.props.tripid}`}>
                                <Button>Tillbaka</Button>
                            </LinkContainer>

                            <LinkContainer to={`${this.props.match.url}/bilder`}>
                                <Button>Bilder</Button>
                            </LinkContainer>
                        </Well>
                    </Col>
                </Row>
            </div>
        );
    }
}

BlogPost.propTypes = propTypes;

export default BlogPost;
