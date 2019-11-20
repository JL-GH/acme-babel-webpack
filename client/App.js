import People from './People.js';
import Places from './Places.js';
import Things from './Things.js';
import Nav from './Nav.js';
import React from 'react';
import {HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom'

// const { HashRouter, Link, NavLink, Route, Switch } = ReactRouterDOM;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
            places: [],
            things: []
        };
    }
    async componentDidMount() {
        const urls = [
            '/api/people',
            '/api/places',
            '/api/things',
        ];
        const [people, places, things] = await Promise.all(
            urls.map(url => axios.get(url).then(response => response.data))
        );
        this.setState({ people, places, things });
    }
    render() {
        return (
            <HashRouter>
                <Route render={() => <Nav {...this.state} />} />
                <div className='container'>
                    <h1>Acme Nouns</h1>
                    <Route path='/people' render={() => <People {...this.state} />} />
                    <Route path='/places' render={() => <Places {...this.state} />} />
                    <Route path='/things' render={() => <Things {...this.state} />} />
                </div>
            </HashRouter>
        );
    }
};

export default App;
