import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom'

// const { HashRouter, Link, NavLink, Route, Switch} = ReactRouterDOM;

const Nav = ({ people, places, things }) => {
    const links = [
        { text: 'People', to: '/people', count: people.length },
        { text: 'Places', to: '/places', count: places.length },
        { text: 'Things', to: '/things', count: things.length }
    ];
    return (
        <nav>
            {
                links.map(link => <NavLink key={link.text} to={link.to}>{link.text}</NavLink>)
            }
        </nav>
    );
};

export default Nav;
