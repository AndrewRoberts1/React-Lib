export const ProductInfo = ({user}) => {
    //Set the vars based on the user object
    const {name, price, desc, rating} = product;

    return (
        <>
            <h3>{name}</h3>
            <p>Price: £{price}</p>
            <p>Desc: {desc}</p>
            <h4>Avg Rating: {rating}</h4>
        </>
        
    )
}