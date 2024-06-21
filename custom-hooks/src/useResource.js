import { useEffect, useState } from "react";
import axios from 'axios';

export const useResource = (url) => {
    const [resource, setResource] = useState(null);

    useEffect(()=>{
        (
            async () => {
                const response = await axios.get(url);
                setResource(response.data);
            }
        )();
    }, [url])

    return resource;
}