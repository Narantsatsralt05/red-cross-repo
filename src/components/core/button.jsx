import styled from "styled-components";

export const Button = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border:  ${({ bc }) => bc};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ bgColor }) => bgColor};
  color:${({ Color }) => Color};
  cursor:pointer;
`;
