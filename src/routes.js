import React from 'react';
import {Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
// import store from './store/store';
import {createBrowserHistory} from 'history';
// import httpService from './axios-interceptor';
import CreateRoute from "./routes/createRoutes";
import {mainRoutes, publicRoute} from "./routes/routesConstant";
// import RenderOnAnonymous from "./components/RenderOnAnonymous";
// import RenderOnAuthenticated from "./components/RenderOnAuthenticated";
// // import AccessManagement from "./components/AccessManagement";
// import Home from "./components/Home";
import { createStore ,compose,applyMiddleware , combineReducers} from 'redux';
import thunk from 'redux-thunk'
import authReducer from '../src/store/reducer';


const history = createBrowserHistory();
// httpService.setupInterceptors(store, history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
    auth : authReducer
})

const store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)));

const Routes = () => {
    return (
         <Provider store={store}>
            <Router history={history}>
                    {/* <RenderOnAnonymous>
                        <Switch>
                            {CreateRoute(publicRoute)}
                        </Switch>
                    </RenderOnAnonymous>
                    <RenderOnAuthenticated> */}
                        <Switch>
                        {CreateRoute(publicRoute)}
                        </Switch>
                {/* </Router>/  </RenderOnAuthenticated> */}
            </Router>
         </Provider>
    )
};

export default Routes;
