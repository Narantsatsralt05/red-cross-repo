import styled from 'styled-components';
import { FontSizes } from './fontSizes';

export const Text = styled.text`
  @media (min-width: 541px) {
    font-size: ${({ type }) => FontSizes.onDesktop[type]};
  }
  @media (max-width: 540px) {
    font-size: ${({ type }) => FontSizes.onMobile[type]};
  }
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'Roboto')};
  font-style: ${({ fontStyle }) => fontStyle};
  cursor: ${({ cursor }) => cursor};
  text-transform: ${({ textTransform }) => textTransform};
`;
