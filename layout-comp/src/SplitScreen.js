import styled from 'styled-components'

const Container = styled.div`display: flex;`;

const Pane = styled.div`
    flex:${props => props.weight};
`;


export const SplitScreen = ({
    //Take what was passed in to the comp
    children,
    //Adds the weight to the style of pane comp
    leftWeight=1,
    rightWeight=1
}) => {
    //Define the children - in order that they are added in the comp
    const [left, right] = children;
    console.log(left)
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        
        </Container>

    )
}