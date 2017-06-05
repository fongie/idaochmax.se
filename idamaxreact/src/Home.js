import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <ButtonGroup bsSize="lg">
                    <LinkContainer to="/sydam">
                        <Button>Sydamerika</Button>
                    </LinkContainer>
                    <LinkContainer to="/indo">
                        <Button>Indonesien</Button>
                    </LinkContainer>
                </ButtonGroup>
            </div>
        );
    }
}

export default Home;
