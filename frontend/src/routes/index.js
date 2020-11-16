import React, {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Checkout from '../pages/Checkout'
import About from '../pages/About';
import Addproduct from '../pages/Addproduct.jsx'
import AuthComponent from "../HOC/AuthComponent";


export const Routes = () => {
    return <Fragment>
                <Router>
                    <Switch>
                        <Route path="/profile" component={AuthComponent(Profile)} exact />
                        <Route path="/login" component={Profile} exact />
                        <Route path='/checkout' component={AuthComponent(Profile)} exact />
                        <Route path='/about' component={About} exact />
                        <Route path='/addproduct' component={Addproduct} exact />
                        <Route path='/shop' component={Homepage} exact />
                        <Route path='/*' component={Homepage} exact />
                    </Switch>
                </Router>
            </Fragment>
}
