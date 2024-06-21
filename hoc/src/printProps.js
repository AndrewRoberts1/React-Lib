//This is a HOC - higher order component
//doesnt need to start with a capital because it won't be used as a normal JSX comp
export const printProps = Component => {
    return (props) => {
        console.log('props - ', props)
        //Will return the comp passed into the higher order comp
        return <Component {...props} />
    }
}