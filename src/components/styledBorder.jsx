import styled from "styled-components";

export const StyledBorder = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ bc }) => bc};
  border-radius: ${({ radius }) => radius};
  overflow: hidden;
  display: flex;
  align-items: center;
`;
