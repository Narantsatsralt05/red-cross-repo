import styled from 'styled-components';

export const Position = styled.div`
  position: ${props => props.position};
  bottom: ${({bottom}) => bottom};
  left: ${({left}) => left};
`;
