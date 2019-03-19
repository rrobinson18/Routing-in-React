import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class App extends Component  {
    render() {
        return(
            <Router>
                <Fragment>
                    <Link className="btn btn-primary">Go Home</Link>
                    <Link className="btn btn-primary">View Films</Link>
                    <Link className="btn btn-primary">View People</Link>
                    <Switch>
                    <Route />
                    <Route />
                    </Switch>
                </Fragment>
                </Router>
        )
    }
}

export default App;