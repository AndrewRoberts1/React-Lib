export const SmallPersonListItem = ({person}) => {
    //Set the name and age based on the person object
    const {name, age} = person;

    return (
        <p>Name: {name}, Age: {age}</p>
    )
}