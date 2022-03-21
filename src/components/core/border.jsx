import styled from 'styled-components';
import _ from 'lodash';

export const Border = styled.div`
  border-color: ${({borderColor})=>{borderColor}};
  border-style: ${({ borderType }) => (borderType ? borderType : 'solid')};
  border-width: ${({ borderWidth }) =>
    _.flow((borderWidth) =>
      _.map(borderWidth, (value) => {
        return `${value}px`;
      }).join(' '),
    )(borderWidth)};
  border-radius: ${({ radius }) => (radius ? radius : 0)}px;
  position: relative;
  overflow: ${({ overflow }) => overflow};
`;
