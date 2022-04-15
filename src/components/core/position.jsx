import styled from 'styled-components';

export const Position = styled.div`
  position: ${props => props.position};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  `;
