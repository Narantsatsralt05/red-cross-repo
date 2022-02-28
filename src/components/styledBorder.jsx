import styled from "styled-components";

export const StyledBorder = styled.div`
    border: 1px solid ${({bc}) => bc};
    border-radius: ${({radius}) => radius};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;