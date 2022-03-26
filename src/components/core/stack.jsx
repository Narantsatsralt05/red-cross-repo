import style from 'styled-components';

export const Stack = style.div`
    display: flex;
    flex-wrap: ${({ flexWrap }) => flexWrap};
    width:${({ width }) => width};
    height:${({ height }) => height};
    flex-direction:${({ direction }) => direction};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items:${({ alignItems }) => alignItems};
    gap: ${({ gap }) => gap}px;
    background-color: ${({ bg }) => bg}
`;
