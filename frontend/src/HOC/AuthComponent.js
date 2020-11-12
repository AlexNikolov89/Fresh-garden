import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

export default WrappedComponent => (props) => {
        const token = useSelector(state => state.authReducer.token)
        const authenticationError = useSelector(state => state.authReducer.authenticationError)
        const history = useHistory();
        const location = useLocation();

        useEffect(() => {
            const userRedirect = () => {
                const path = location.pathname;

                if (path.includes('profile') && !token) {
                    history.push('/login');
                } else if (path.includes('login') && token) {
                    history.push('/profile');
                } else if (authenticationError) {
                    history.push('/profile');
                }
            };

            userRedirect();
        }, [authenticationError, token, history, location]);

        return <WrappedComponent {...props} />
}
