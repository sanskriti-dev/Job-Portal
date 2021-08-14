import React from 'react';
import { useSelector } from 'react-redux';
import {Router, Switch} from 'react-router-dom';
import CreateRoute from "./routes/createRoutes";
import {mainRoutes, publicRoute} from "./routes/routesConstant";
import {createBrowserHistory} from 'history';



const history = createBrowserHistory();

const Routes = () => {
    const store = useSelector(stote => stote?.auth)
    const routes = store?.token ? mainRoutes : publicRoute
    return (
       
            <Router history = {history} >
                        <Switch>
                            {CreateRoute(routes)}
                        </Switch>
            </Router>
    )
};

export default Routes;
