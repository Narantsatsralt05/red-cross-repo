import styled from 'styled-components';
// alignItems justifyContent alignVertical
const StackQueue = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) => height};
  gap: ${({ gap }) => gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.direction};
`;

const Image = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Color = {
  blue: '#0066B3',
  grey: '#626262',
  orange: '#DD5D00',
  red: '#D90000',
};

const Text = styled.text`
  font-size: ${(props) => (props.number ? '36px' : '12px')};
  font-weight: 700;
  color: white;
  width: 50%;
  text-align: left;
  padding-left: ${(props) => (props.number ? '10px' : '2px')};
`;

const DataCon = styled.div`
  padding: 5px;
  padding-right: 0px;
  padding-right: 1px;
  height: 75px;
  @media (min-width: 1300px) {
    width: 270px;
  }
  @media (max-width: 1300px) {
    width: 180px;
  }
  border-radius: 5px;
  background-color: ${(props) => (props ? props.color : 'blue')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export { StackQueue, Image, DataCon, Text };
