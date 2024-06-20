import React, { useState, useEffect } from "react"
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/user/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Failed to load current user:", error);
            }
        })();
    }, [userId]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    // Pass the user state into all children of this comp (CurrentUserLoader)
                    return React.cloneElement(child, { user });
                }
            })}
        </>
    )
}