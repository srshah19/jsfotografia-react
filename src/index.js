import React from 'react';
import ReactDOM from 'react-dom';

/* Local imports */
import App from './App';
import Couple from './Couple';
import Product from './Product';
import Portraits from './Portraits';

/* CSS Imports */
import './index.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mobileMenu: true
        }
    }

    _showMobileMenu() {
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }

    render() {
        return (
            <div>
                <header className="codrops-header">
                    <h1 className="codrops-header__title">
                        <Link to="/">JS Fotografia</Link>
                    </h1>
                    <p className="codrops-header__demos">
                        <Link to="/couple">Pre-Wedding</Link>
                    </p>
                    <p className="codrops-header__demos">
                        <Link to="/product">Product</Link>
                    </p>
                    <p className="codrops-header__demos">
                        <Link to="/portraits">Portraits</Link>
                    </p>
                    <p className="codrops-header__demos">
                        <a href="mailto:jinen@jsfotografia.com">Contact Me</a>
                    </p>
                    <p className="codrops_icon_menu" onClick={this._showMobileMenu.bind(this)}>
                        <i className="fa fa-bars"/>
                    </p>
                    <ul className={this.state.mobileMenu ? 'hidden': 'show codrops-header_dropdown'}>
                        <li onClick={this._showMobileMenu.bind(this)}><Link to="/couple">Pre-Wedding</Link></li>
                        <li onClick={this._showMobileMenu.bind(this)}><Link to="/product">Product</Link></li>
                        <li onClick={this._showMobileMenu.bind(this)}><Link to="/portraits">Portraits</Link></li>
                        <li><a href="mailto:jinen@jsfotografia.com">Contact Me</a></li>
                    </ul>
                    <p className="message">You're seeing a fallback because your browser does not support CSS Masks.</p>
                </header>
                <hr/>
            </div>
        )
    }
}

ReactDOM.render((
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={App}/>
                <Route path="/couple" component={Couple}/>
                <Route path="/product" component={Product}/>
                <Route path="/portraits" component={Portraits}/>
            </div>
        </Router>
    ),
    document.getElementById('root')
);
