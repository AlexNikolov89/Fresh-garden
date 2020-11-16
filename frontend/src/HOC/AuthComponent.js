import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import baseUrl from "../helpers/baseUrl";

export default WrappedComponent => (props) => {
        const authenticationError = useSelector(state => state.authReducer.authenticationError)
        const history = useHistory();
        const location = useLocation();
        const tokenLocal = localStorage.getItem("token");
        const tokenRedux = useSelector(state => state.authReducer.token)

        useEffect(() => {
            const userRedirect = async () => {
                const path = location.pathname;
                const url = `${baseUrl}auth/token/verify`;
                const token = tokenRedux ? tokenRedux : tokenLocal ? tokenLocal : "null"
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
                console.log("HOC------------tokenLocal", tokenLocal)
                console.log("HOC------------tokenRedux", tokenRedux)

                if (token) {
                    console.log("HOC------------tokenCombined", token)
                } else console.log("HOC------------tokenCombined FALSE")
                console.log("HOC------------path", path)
                console.log("HOC------------verified", verified)
                console.log("HOC------------in HOC authError", authenticationError)
                if (path.includes('/user') && !verified) {
                    console.log("HOC------------pushOne /user/login")
                    history.push('/user/login');
                } else if (path.includes('/user/login') && verified) {
                    console.log("HOC------------pushTwo /user/profile")
                    history.push('/user/profile');
                } else if (!verified) {
                    console.log("HOC------------pushThree /user/login", response)
                    history.push('/user/login');
                }
            };
            userRedirect();

        }, [authenticationError, tokenRedux, tokenLocal, history, location]);

        return <WrappedComponent {...props} />
}
