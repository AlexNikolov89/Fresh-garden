import React, {Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import Checkoutpage from '../pages/Checkoutpage'
import About from '../pages/Aboutpage';


export const Routes = () => {
    return <Fragment>
                <Router>
                    <Switch>
                        <Route path='/' component={Homepage} exact />
                        <Route path='/checkoutpage' component={Checkoutpage} exact />
                        <Route path='/about' component={About} exact />
                    </Switch>
                </Router>
            </Fragment>
}