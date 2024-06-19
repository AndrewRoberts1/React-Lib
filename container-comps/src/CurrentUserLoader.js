import React, { useState, useEffect } from "react"
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('/current-user');
                setUser(response.data);
            } catch (error) {
                console.error("Failed to load current user:", error);
            }
        })();
    }, [])

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