import styled from "styled-components";

export const StyledBorder = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border:  ${({ bc }) => bc};
  border-radius: ${({ radius }) => radius};
  border-top: ${({ BorderTop }) => BorderTop};
  border-bottom: ${({ BordeerBottom }) => BordeerBottom};
  border-left: ${({ BorderLeft }) => BorderLeft};
  border-right: ${({ BorderRight }) => BorderRight};
  overflow: hidden;
  display: flex;
  align-items: center;
`;
