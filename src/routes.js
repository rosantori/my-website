import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/my-website" exact component = {Home} />
                <Route path = "/my-website/about" exact component = {About} />
                <Route path = "/my-website/experiences" exact component = {Experiences} />
                <Route path = "/my-website/contact" exact component = {Contact} />
            </Switch>
        </BrowserRouter>
    );
}