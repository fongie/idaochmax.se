import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div style={{margin:'auto', padding: '1em', marginTop: '10px', marginBottom: '10px'}}>
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
