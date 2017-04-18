import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Couple from './Couple';
import './index.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

ReactDOM.render((
        <Router>
            <div>
                <header className="codrops-header">
                    <h1 className="codrops-header__title">
                        <Link to="/">JS Fotografia</Link>
                    </h1>
                    <p className="codrops-header__demos">
                        <Link to="/couple">Pre-Wedding</Link>
                    </p>
                    <p className="codrops-header__demos">
                        <a href="mailto:jinen@jsfotografia.com">Contact Me</a>
                    </p>
                    <p className="message">You're seeing a fallback because your browser does not support CSS Masks.</p>
                </header>
                <hr/>

                <Route exact path="/" component={App}/>
                <Route path="/couple" component={Couple}/>
            </div>
        </Router>
    ),
    document.getElementById('root')
);
