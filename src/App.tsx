import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Discover from "./components/Discover";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Discover} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
