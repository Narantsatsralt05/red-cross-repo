import styled from "styled-components";

export const StyledBorder = styled.div`
  border-style:  ${({ borderType = "solid" }) => borderType};
  border-radius: ${({ radius = 0 }) => radius}px;
  border-top: ${({ borderTop }) => borderTop}px;
  border-bottom: ${({ borderBottom }) => borderBottom}px;
  border-left: ${({ borderLeft }) => borderLeft}px;
  border-right: ${({ borderRight }) => borderRight}px;
`;
