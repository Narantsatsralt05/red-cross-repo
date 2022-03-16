import style from 'styled-components'

export const Text = style.div`
 color:${({ color }) => color};
 font-size:${({ FontSize }) => FontSize};
 font-family:${({ FontFamily }) => FontFamily};
 font-style: ${({ FontStyle }) => FontStyle};
 font-weight: ${({ FontWeight }) => FontWeight};
 line-height:${({ LineHeight }) => LineHeight};
`