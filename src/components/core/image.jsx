import styled from 'styled-components'
export const Picture = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    background-repeat: no-repeat;
    background-size: cover
`