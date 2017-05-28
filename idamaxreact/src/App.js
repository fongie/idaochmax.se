import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Content from './Content';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route 
                        path="/:tripid" 
                        component={Content}
                    />
                </Switch>

                <Footer />
            </div>
        );
    }
}


//TODO MAKE BILDSIDOR!

export default App;
