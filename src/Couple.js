import React, {Component} from 'react';
import './App.css';
import {Slider} from './demo';

class Couple extends Component {

    componentDidMount() {
        new Slider();
    }

    render() {
        return (
            <main>
                <div className="page-view couple">
                    <div className="project">
                        <div className="text">
                            <p>Treasure Island - San Francisco</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="text">
                            <p>Half Moon Bay</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="text">
                            <p>Palace of fine arts - San Francisco</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="text">
                            <p>Treasure Island - San Francisco</p>
                        </div>
                    </div>
                    <nav className="arrows">
                        <div className="arrow previous">
                            <svg viewBox="208.3 352 4.2 6.4">
                                <polygon className="st0"
                                         points="212.1,357.3 211.5,358 208.7,355.1 211.5,352.3 212.1,353 209.9,355.1"/>
                            </svg>
                        </div>
                        <div className="arrow next">
                            <svg viewBox="208.3 352 4.2 6.4">
                                <polygon className="st0"
                                         points="212.1,357.3 211.5,358 208.7,355.1 211.5,352.3 212.1,353 209.9,355.1"/>
                            </svg>
                        </div>
                    </nav>
                </div>
            </main>
        );
    }
}

export default Couple;
