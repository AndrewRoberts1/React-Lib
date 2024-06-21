import { useResource } from "./useResource";

export const ProductInfo = ({productId}) => {
    const product = useResource(`/product/${productId}`);

    //Set the vars based on the user object
    const {name, price, desc, rating} = product || {};

    
    return product ? (
        <>
            <h3>{name}</h3>
            <p>Price: £{price}</p>
            <p>Desc: {desc}</p>
            <h4>Avg Rating: {rating}</h4>
        </>
        
    ) : <p>Loading..</p>
}