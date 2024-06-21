//File to load user data that can be wrapped around UserInfo
import React, { useState, useEffect} from 'react';
import axios from 'axios';

export const withUser= (Component, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(()=> {
            (
                async () => {
                    try {
                        const response = await axios.get(`/user/${userId}`);
                        setUser(response.data);
                    } catch (error) {
                        console.error("Failed to load current user:", error);
                    }
                }
            )();
        }, [])

        return <Component {...props} user={user} />
    }
}