import style from 'styled-components'
const Picture = style.img`
    width: ${props => props.width};
    height: ${props => props.height};
    background-repeat: no-repeat;
    background-size: cover
`


export default Picture