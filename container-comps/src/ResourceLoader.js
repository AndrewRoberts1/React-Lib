//This is a generic GET that allows the comp to get any type of resource and pass the data back

import React, { useState, useEffect } from "react"
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(resourceUrl);
                setState(response.data);
            } catch (error) {
                console.error("Failed to load current user:", error);
            }
        })();
    }, [resourceUrl]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    // Pass the user state into all children of this comp (CurrentUserLoader)
                    return React.cloneElement(child, { [resourceName]: state });
                }
            })}
        </>
    )
}