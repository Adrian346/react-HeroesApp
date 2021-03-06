import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthConext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboradRoutes } from './DashboradRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <Router>
            <div>

                <Switch>
                <PublicRoute 
                    exact 
                    path="/login" 
                    component={ LoginScreen }
                    isAuthenticated={ user.logged }
                />

                <PrivateRoute 
                    path="/" 
                    component={ DashboradRoutes }
                    isAuthenticated={ user.logged }
                />
                </Switch>
            </div>
        </Router>        
    )
}
