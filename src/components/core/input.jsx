import styled from 'styled-components';
export const StyledInput = styled.input`
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  font-size: ${(props) => props.size};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font: ${(props) => props.font};
  animation-name: ${(props)=>props.animation};
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
  border-radius: ${(props) => props.borderradius};
  font-size: ${(props) => props.size};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`;



const Styledinput =({label,height,width,border,borderradius,fontSize,color,animationName,font ,placeholder})=>{
  return(
    <div className="InputContainer">
      <span style={{"fontSize":{fontSize},'font':{font}}}  >{label}</span>
      <StyledInput placeholder={placeholder} height={height} width={width} border={border} borderradius={borderradius} size={fontSize} color={color} animation={animationName} font={font} />
    </div>
  )
}

export default Styledinput