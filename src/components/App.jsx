import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import FilmsCardList from './FilmsCardList';
import SingleFilm from './SingleFilm';
import PeopleCardList from './PeopleCardList';
import Person from './Person';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
    
                    <Navbar />

                    <Switch>
                        <Route exact path="/films" component={FilmsCardList} />
                        <Route exact path="/people" component={PeopleCardList} />
                        <Route exact path="/film/:id" component={SingleFilm} />
                        <Route exact path="/person/:id" component={Person} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;