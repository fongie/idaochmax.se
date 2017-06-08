import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        const headerStyling = {
            backgroundColor: '#d9f2d9',
            margin: '0 0 30px 0',
            padding: '8px 0 0 0',
            width: '100%',
            borderWidth: '2px',
            borderColor: '#999999',
            height: '250px',
        }
        this.state = {
            headerStyling,
        }
    }
    render() {
        return (
            <PageHeader style={{ ...this.state.headerStyling }}>
                <div style={{marginTop:'60px'}}>
                    <p style={{color: '#999999', fontSize: '2.5em'}}>Ida & Max</p>
                <br />
                <small style={{fontWeight: 'bold'}}>En reseblogg..</small>
            </div>
            </PageHeader>
        );
    }
}

export default Header;
