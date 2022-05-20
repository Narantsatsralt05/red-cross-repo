import styled from 'styled-components';
import { FontSizes, fontWeight, lineHeight } from './fontSizes';

export const Text = styled.text`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  @media (min-width: 541px) {
    font-size: ${({ type }) => FontSizes.onDesktop[type]};
  }
  @media (max-width: 540px) {
    font-size: ${({ type }) => FontSizes.onMobile[type]};
  }
  @media (min-width: 541px) {
    font-weight: ${({ type }) => fontWeight.onDesktop[type]};
  }
  @media (max-width: 540px) {
    font-weight: ${({ type }) => fontWeight.onMobile[type]};
  }
  @media (min-width: 541px) {
    line-height: ${({ type }) => lineHeight.onDesktop[type]};
  }
  @media (max-width: 540px) {
    line-height: ${({ type }) => lineHeight.onMobile[type]};
  }
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => (fontFamily ?  'Roboto': 'sans-serif')};
  font-style: ${({ fontStyle }) => fontStyle ? fontStyle : "normal"};
  cursor: ${({ cursor }) => cursor};
  text-transform: ${({ textTransform }) => textTransform};
`;