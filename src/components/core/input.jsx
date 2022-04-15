import styled from 'styled-components';
export const StyledInput = styled.input`
  width: ${(props) => props.width ? props.width : '400px'};
  border: ${(props) => props.border ? props.border : '0.5px solid rgba(0, 0, 0, 0.3);'};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : '5px'};
  font-size: ${(props) => props.size ? props.size : '17px'};
  height: ${(props) => props.height ? props.height : '40px'};
  color: ${(props) => props.color};
  font: ${(props) => props.font};
  animation-name: ${(props) => props.animation};
  padding-left: 1vw;
  padding-right: 1vw;
  display: flex;
  align-items: center;
  ::-webkit-inner-spin-button{
        -webkit-appearance:  none; 
        margin: 0; 
    }
`;
export const Styledoneletter = styled.input`
  width: ${(props) => props.width};
  border: ${(props) => props.border}; 
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.size};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`;



const Styledinput = ({ label, height, width, border, borderRadius, size, color, animationName, font, placeholder, type, value }) => {
  return (
    <div>
      <span style={{ "fontSize": '19px', 'font': { font } }}  >{label}</span>
      <StyledInput type={type} placeholder={placeholder} value={value} height={height} width={width} border={border} borderRadius={borderRadius} size={size} color={color} animation={animationName} font={font} />
    </div>
  )

}

export default Styledinput