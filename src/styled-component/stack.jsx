import style from 'styled-components'

const Stack = style.div`
<<<<<<< HEAD
    display:flex;
    flex-direction:row;
    justify-content:space-between;
=======
>>>>>>> main
    display: flex;
    flex-wrap:wrap;
    flex-direction:${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items:${({ alignItems }) => alignItems};
`



<<<<<<< HEAD
export default Stack
=======
export default Stack 
>>>>>>> main
