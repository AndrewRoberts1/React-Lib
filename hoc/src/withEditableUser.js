import axios from "axios";
import React, { useState, useEffect } from "react"

export const withEditableUser = (Component, userId) => {
    return props => {
        const [ogUser, setOgUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(()=> {
            (
                async () => {
                    const response = await axios.get(`/user/${userId}`);
                    setOgUser(response.data);
                    setUser(response.data);
                }
            )();
        }, []);

        const onChangeUser = changes => {
            setUser({...user, ...changes});
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/user/${userId}`, {user});
            setOgUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(ogUser);
        }
        return <Component {...props} user={user}  onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onResetUser}/>
    }
}