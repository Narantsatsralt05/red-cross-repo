import style from 'styled-components'

export const Text = style.div`
 color:${({ color }) => color};
 font-size:${({ fontSize }) => fontSize};
 font-family:${({ fontFamily }) => fontFamily};
 font-style: ${({ fontStyle }) => fontStyle};
 font-weight: ${({ fontWeight }) => fontWeight};
 line-height:${({ lineHeight }) => lineHeight};
`