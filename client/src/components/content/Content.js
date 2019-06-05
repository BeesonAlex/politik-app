import React, { Component } from 'react';
import NavBarContent from '../nav-bar/NavBarContent';
import Footer from '../footer/Footer';
import CountrySelect from '../country-select/CountrySelect';
import Country from '../country/Country';
import { Switch, Route } from "react-router-dom";
import '../../App.scss';

export class Content extends Component {
    render() {
        return (
            <>
            <nav>
            <NavBarContent />
            </nav>
            <main>
            <Switch>
                <Route path="/country-select/" exact component={CountrySelect} />
                <Route path="/country-select/:id" exact component={Country} />
            </Switch>
            </main>
            <footer>
            <Footer />
            </footer>
            </>
        )
    }
}

export default Content
