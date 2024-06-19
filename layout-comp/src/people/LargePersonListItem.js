export const LargePersonListItem = ({person}) => {
    //Set the name and age based on the person object
    const {name, age, hairColour, hobbies} = person;

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