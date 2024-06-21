import axios from "axios";
import React, { useState, useEffect } from "react"

const capitalise = str => str.charAt().toUpperCase() + str.slice(1);

export const withEditableResource = (Component, url, resourceName) => {
    return props => {
        const [ogData, setOgData] = useState(null);
        const [data, setData] = useState(null);

        useEffect(()=> {
            (
                async () => {
                    const response = await axios.get(url);
                    setOgData(response.data);
                    setData(response.data);
                }
            )();
        }, []);

        const onChange = changes => {
            setData({...data, ...changes});
        }

        const onSave = async () => {
            const response = await axios.post(url, {[resourceName]: data});
            setOgData(response.data);
            setData(response.data);
        }

        const onReset = () => {
            setData(ogData);
        }
        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalise(resourceName)}`] : onChange,
            [`onSave${capitalise(resourceName)}`] : onSave,
            [`onReset${capitalise(resourceName)}`] : onReset,
        };
        return <Component {...props} {...resourceProps}/>
    }
}