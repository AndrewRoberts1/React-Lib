export const UserInfo = ({user}) => {
    //Set the vars based on the user object
    const {name, age, hairColour, hobbies} = user;

    return (
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
        
    )
}