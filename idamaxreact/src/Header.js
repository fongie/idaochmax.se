import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        const headerStyling = {
            backgroundColor: '#e6faff',
            margin: '0 0 30px 0',
            padding: '5px 0 0 0',
            width: '100%',
            borderColor: '#00b8e6',
        }
        this.state = {
            headerStyling,
        }
    }
    render() {
        return (
            <PageHeader style={ this.state.headerStyling }>
                Ida & Max
                <br />
                <small>En reseblogg..</small>
            </PageHeader>
        );
    }
}

export default Header;
