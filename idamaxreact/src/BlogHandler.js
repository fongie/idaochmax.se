import React, { Component } from 'react';
import BlogPost from './BlogPost';

/**
 * BlogHandler is responsible for fetching the text and image files for the current trip ID and outputting
 * the blogposts, passing the blogpost the text and images belonging to it
 */
class BlogHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts,
            dates,
            titles,
            content,
        }
        this.getBlogFilesFrom = this.getBlogFilesFrom.bind(this);
        this.renderBlogPosts = this.renderBlogPosts.bind(this);
    }
    //TODO finish blog.json and process that here. also write script to turn .txt files into the blog.json file..
    getBlogFilesFrom(trip) {

    }
    renderBlogPosts() {
        return <BlogPost title="Blog1" content="long string with images" author="Max" />;
    }
    render() {
        return (
            <div>
                {this.renderBlogPosts}
            </div>
        );
    }
}

export default BlogHandler;
