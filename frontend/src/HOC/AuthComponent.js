import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

export default WrappedComponent => (props) => {
        const authenticationError = useSelector(state => state.authReducer.authenticationError)
        const history = useHistory();
        const location = useLocation();
        const tokenLocal = localStorage.getItem("token");
        const tokenRedux = useSelector(state => state.authReducer.token)

        useEffect(() => {
            const userRedirect = async () => {
                const path = location.pathname;
                const url = "http://127.0.0.1:8000/backend/api/auth/token/verify/";
                const token = tokenRedux ? tokenRedux : tokenLocal ? tokenLocal : "null"
                console.log("tokenRedux----", tokenRedux)
                console.log("tokenLocal----", tokenLocal)
                console.log("token--------", token)
                const config = {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify({token})
                };
                const response = await fetch(url, config);
                const data = await response.json();
                const verified = data ? false : true;

                if (path.includes('profile') && !verified) {
                    history.push('/login');
                } else if (path.includes('login') && verified) {
                    history.push('/profile');
                } else if (authenticationError) {
                    history.push('/profile');
                }
            };
            userRedirect();

        }, [authenticationError, tokenRedux, tokenLocal, history, location]);

        return <WrappedComponent {...props} />
}
