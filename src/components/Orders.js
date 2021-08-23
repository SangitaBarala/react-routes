import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import OpenOrders from "./OpenOrders";
import ClosedOrders from "./closedOrders";

const Orders = () => {
    return (
        <div className='order'>
            All order
            <BrowserRouter>
                <li><Link to='/open'>Open orders</Link></li>
                <li><Link to='/closed'>Closed orders</Link></li>
                <Switch>
                    <Route path='/open' component={OpenOrders}/>
                    <Route path='/closed' component={ClosedOrders}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default Orders;