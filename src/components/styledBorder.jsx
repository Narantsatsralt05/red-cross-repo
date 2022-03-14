import styled from "styled-components";

export const StyledBorder = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-left: ${({borderLeft}) => borderLeft};
  border-right: ${({borderRight}) => borderRight};
  border-bottom: ${({borderBottom}) => borderBottom};
  border-top: ${({borderTop}) => borderTop};
  border-radius: ${({ radius }) => radius};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
