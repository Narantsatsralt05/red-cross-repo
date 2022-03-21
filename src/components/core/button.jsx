import styled from 'styled-components';

export const Button = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border:  ${({ bc }) => bc};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  color:${({ color }) => color};
  cursor:pointer;
`;
