import styled from 'styled-components';

const Position = styled.div`
  position: ${(props) => props.pos};
  top:${(props)=> props.size[0]};
  left:${(props)=> props.size[1]};
  bottom:${(props)=> props.size[2]};
  right:${(props)=> props.size[3]};
`;

export default Position;