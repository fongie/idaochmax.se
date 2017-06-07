import React, { Component } from 'react';
import CopyrightLink from './CopyrightLink';

class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: '30px'}}>
                <CopyrightLink />
            </div>
        );
    }
}

export default Footer;
