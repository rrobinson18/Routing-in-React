import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Fragment>
                    <Link></Link>
                    <Link></Link>
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