import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.renderTrips = this.renderTrips.bind(this);

        const trips = [
            {
                name: 'Dolomiterna 2019',
                id: 'dolomiterna'
            },
            {
                name: 'Kroatien 2018',
                id: 'kroatien'
            },
            {
                name: 'Indonesien 2017',
                id: 'indo'
            },
            {
                name: 'Sydamerika 2016',
                id: 'sydam'
            },
        ];
        const generalStyling = {
            listStyle: 'none',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            marginBottom: '100px',

        };
        const thumbnailStyling = {
            position: 'relative',
            float: 'left',
            width: '680px',
            height: '500px',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '10%',
            cursor: 'pointer',
        };
        this.state = {
            generalStyling,
            thumbnailStyling,
            trips,
        }
    }

    renderTrips() {
        const toRender = this.state.trips.map(
            (item, i) => {
                const tripinfo = require(`../res/${item.id}/tripinfo.json`);
                const bgImage = require(`../res/${item.id}/img/${tripinfo.bgimage}`);
                return (
                    <div key={i} style={{width: '700px', height:'500px', marginBottom: '70px', padding: '20px'}}>
                        <LinkContainer to={`/${item.id}`}>
                        <li>
                            <h3 style={{fontWeight: 'bold'}}>{item.name}</h3>
                            <div style={{...this.state.thumbnailStyling, backgroundImage: `url(${bgImage})`}}>
                            </div>
                        </li>
                    </LinkContainer>
                    </div>
                );

            });
        return toRender;
    }
    render() {
        return (
                <div style={{...this.state.generalStyling}}>
                    { this.renderTrips() }
                </div>
        );
    }
}
export default Home;
