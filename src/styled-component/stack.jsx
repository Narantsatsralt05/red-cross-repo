import style from 'styled-components'

const Stack = style.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction:${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items:${({ alignItems }) => alignItems};
`



export default Stack 