import styled from 'styled-components';

export const Button = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border:  ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ bgColor }) => bgColor};
  color:${({ color }) => color};
  cursor:pointer;
`;
