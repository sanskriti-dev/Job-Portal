import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Common/Header';

const RouteWithSubRoutes = (route) => {

    return (
        <React.Fragment>
                <Route path={route.path} exact={route.exact || false} render={props => {
                        return (
                            <>
                                 <Header/>
                                 <route.component {...props} routes={route.routes}/>
                                
                            </>
                        )
                }}
                />
        </React.Fragment>

    )
};

const CreateRoute = (routes) => (routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />)
));

export default CreateRoute;
