import React, { Component } from 'react';
import { 
    Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import axios from 'axios';
/**
 * BlogOverview shows thumbnails (that link to the posts) of all blogposts in this trip ID
 */
const propTypes = {
    tripid: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
const defaultProps = {
    isNavBar: false,
}
class BlogOverview extends Component {
    constructor(props) {
        super(props);
        this.renderThumbnails = this.renderThumbnails.bind(this);
        this.renderNavBar = this.renderNavBar.bind(this);
        this.fetchWordpressAPI = this.fetchWordpressAPI.bind(this);

        const tripInfo = require(`../res/${this.props.tripid}/tripinfo.json`);
        const blogOverviewStyling = {
            listStyle: 'none',
            backgroundColor: '#0000',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
        };
        const thumbnailStyling = {
            position: 'relative',
            float: 'left',
            width: '480px',
            height: '300px',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '10%',
        };
        this.state = {
            tripInfo,
            blogOverviewStyling,
            thumbnailStyling,
        }
    }

    //gets the json from wordpress, but where do i store it? learn redux for this??
    fetchWordpressAPI(tripid) {
        const url = 'http://wp.idaochmax.se/wp-json/wp/v2/posts';
        const json = axios.get(url)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    renderThumbnails() {
        const thumbnails = this.state.tripInfo.dates.map((date, i) => {
            const post = require(`../res/${this.props.tripid}/blog/json/${date}.json`);
            const image = require(`../res/${this.props.tripid}/img/${date}/${post.info.thumbnail}`);
            return(
                <div key={i*115} className="overview-items-pulse">
                    <Link 
                        key={i}
                        to={`/${this.props.tripid}/${date}`}
                    >
                        <div style={{width: '500px', height:'300px', padding: '20px'}}>
                            <li>
                                <div style={{...this.state.thumbnailStyling, backgroundImage: `url(${image})`}}>
                                </div>
                                <h4 style={{color: '#666666', fontWeight: 'bold'}}>{post.info.title}</h4>
                            </li>
                        </div>
                    </Link>
                </div>
            );
        });
        return thumbnails.reverse();
    }

    renderNavBar() {
        const thumbnails = this.state.tripInfo.dates.map((date, i) => {
            const post = require(`../res/${this.props.tripid}/blog/json/${date}.json`);
            const image = require(`../res/${this.props.tripid}/img/${date}/${post.info.thumbnail}`);
            return(
                <div key={i*350} className="overview-items-pulse">
                    <Link 
                        key={i}
                        to={`/${this.props.tripid}/${date}`}
                    >
                        <li style={{padding: '5px'}}>
                            <Image 
                                style={{width: '100%'}}
                                src={image} 
                                alt="" 
                                key={i} 
                                circle

                            />
                            <p style={{color: '#666666', fontWeight: 'bold'}}>{post.info.title}</p>
                        </li>
                    </Link>
                </div>
            );
        });
        return thumbnails.reverse();
    }
    render() {
        return (
            <div>
                <ul style={ this.state.blogOverviewStyling }>
                    {this.props.isNavBar ? this.renderNavBar() : this.renderThumbnails()}
                </ul>
            </div>
        );
    }
}

BlogOverview.propTypes = propTypes;
BlogOverview.defaultProps = defaultProps;

export default BlogOverview;
