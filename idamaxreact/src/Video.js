import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div>
                <video style={{width:'100%'}} controls >
                    <source 
                        src={this.props.src} 
                        type="video/mp4" 
                    />
                </video>
            </div>
        );
    }
}

export default Video;
