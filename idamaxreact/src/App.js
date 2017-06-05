import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Content from './Content';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = () => (
    <Router>
        <Route render={({location}) => (
            <div className="container text-center" style={{width: '100%'}}>
                <Link to="/">
                    <Header />
                </Link>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={700}
                    transitionLeave={false}
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                >
                    <Switch
                        location={location}
                        key={location.key}
                    >
                        <Route exact path="/" component={Home} />
                        <Route
                            path="/:tripid"
                            component={Content}
                        />
                    </Switch>
                </ReactCSSTransitionGroup>
                <Footer />
            </div>
        )}/>
    </Router>
)

//TODO make bildsidor
//TODO när man trycker på något i blogoverview så ska blogoverview thumbnails shiftas till vänster och blogpost komma fram

export default App;
