export const RegList = ({ items, resourceName, itemComp: ItemComp}) => {
    console.log(items, resourceName, ItemComp)
    return (
        <>
            {items.map((item, index) => {
                // so the resource name would be person={item} but can use to pass in the resource we want {...{[resourceName]: item}}
                return <ItemComp key={index} {...{[resourceName]: item}} />
            })}
        </>
    )
}