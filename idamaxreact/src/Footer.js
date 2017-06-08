import React, { Component } from 'react';
import CopyrightLink from './CopyrightLink';

class Footer extends Component {
    render() {
        return (
            <div style={{fontWeight: 'bold', fontSize: '1.2em',  marginTop: '30px'}}>
                <CopyrightLink />
            </div>
        );
    }
}

export default Footer;
