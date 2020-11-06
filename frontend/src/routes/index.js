import React, {Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShoppingCart from '../components/ShoppingCart/index'
import Homepage from '../pages/Homepage';
import Checkoutpage from '../pages/Checkoutpage'


export const Routes = () => {
    return <Fragment>
                <Router>
                    <Switch>
                        <Route path='/' component={Homepage} exact />
                        <Route path='/shoppingcart' component={ShoppingCart} />
                        <Route path='/checkoutpage' component={Checkoutpage} exact />
                    </Switch>
                </Router>
            </Fragment>
}