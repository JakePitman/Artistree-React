import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArtPage from './components/ArtPage'
import HomePage from './components/HomePage'

import './App.css';

class App extends Component {

    state = {
        entries: [
            {
                title: 'Pikachu used Surf!',
                source: "https://orig00.deviantart.net/d20a/f/2012/037/6/f/surfing_pikachu_by_devastis-d4ou5el.png"
            },
            {
                title: 'Pikachu\'s Beach',
                source: "https://data.whicdn.com/images/94866344/original.png"
            },
            {
                title: 'Pikachu used Surf!',
                source: "https://pm1.narvii.com/6461/23ab380a0f4dfaf0003f7cf698beba7c1f5acfa7_hq.jpg"
            }
        ]
    }

  render() {
    return (
        <Router>
            <div className="container">
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link> 
                        </li>
                        <li>
                            <Link to="/art">Art</Link> 
                        </li>
                    </ul>
                </div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/art" render={()=><ArtPage entries={this.state.entries}/>}/>
            </div>
        </Router>
    )
  }
}

export default App;
