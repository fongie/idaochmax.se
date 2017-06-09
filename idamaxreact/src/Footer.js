import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{fontWeight: 'bold', fontSize: '1.2em',  marginTop: '30px'}}>
                <CopyrightLink />
            </div>
        );
    }
}

const CopyrightLink = () => {
    return(
            <p>
                &copy; 
                <a 
                    style={{textDecoration: 'none'}} 
                    href="http://maxk.se"
                >
                    2017 Max Körlinge
                </a>
            </p>

    );
};

export default Footer;
