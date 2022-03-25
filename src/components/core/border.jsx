import styled from 'styled-components';
import _ from 'lodash';

export const Border = styled.div`
  border-color: ${(props)=>props.borderColor};
  border-style: ${({ borderType }) => (borderType ? borderType : 'solid')};
  border-width: ${({ borderWidth }) =>
    _.flow((borderWidth) =>
      _.map(borderWidth, (value) => {
        return `${value}px`;
      }).join(' '),
    )(borderWidth)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  position: relative;
  overflow: ${({ overFlow }) => overFlow};
`;
