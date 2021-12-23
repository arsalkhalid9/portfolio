import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Uikit from './Uikit';
import Contact from './Contact';

export default function Main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/ui" exact component={Uikit} />
                    <Route path="/about" exact  component={About} />
                    <Route path="/resume" exact  component={Resume} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}