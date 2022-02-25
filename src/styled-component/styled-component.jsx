import styled from 'styled-components'
// alignItems justifyContent alignVertical 
const StackQueue = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: ${({ height }) => height};
    gap: ${({ gap }) => gap};
    justify-content:${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction:${props => props.direction};
`;  

const Image = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover
`

export { StackQueue , Image}


