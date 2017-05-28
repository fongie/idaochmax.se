import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/sydam"><h2>Sydamerika</h2></Link>
                <Link to="/indo"><h2>Indonesien</h2></Link>
        </div>
    );
}
}

export default Home;
