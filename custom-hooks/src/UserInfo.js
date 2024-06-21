import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useDataSource } from "./useDataSource";
import { useResource } from "./useResource";
import { useUser } from "./useUser";

//set the function for useDataSource before to be reused
const serverResp =  url => async () => {
    const response = await axios.get(url);
    return response.data;
}

const localStorageResp = key => () => {
    return localStorage.getItem(key);
}

export const UserInfo = ({ userId}) => {
    //Only get the current
    //const user = useCurrentUser();
    //Get any user by id
    //const user = useUser(userId);

    //Get any resource
    //const user = useResource(`/user/${userId}`);

    const user = useDataSource(serverResp(`/user/${userId}`))

    //Set the vars based on the user object - if no user then a
    const {name, age, hairColour, hobbies} = user || {};

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>hairColour: {hairColour}</p>
            <h4>hobbies:</h4>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index}>{hobby}</li>
                })}
            </ul>
        </>
        
    ) : <p>Loading...</p>
}