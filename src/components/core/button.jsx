import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border:  ${({ bc }) => bc};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  color:${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  cursor :pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
