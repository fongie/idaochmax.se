import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Content from './Content';
import BlogContent from './BlogContent';

ReactDOM.render(
    <Router>
        <App>
            <Route exact={true} path="/" component={Content} />
            <Route path="/blog" component={BlogContent} />
        </App>
    </Router>
    ,
    document.getElementById('root')
);



/*
            <Route path="/home" component={Home} />
            <Route path="/tour" component={Tour} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            */
