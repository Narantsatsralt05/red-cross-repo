import styled from 'styled-components';
import { theme } from '../../theme/theme';
export const StyledInput = styled.input`
  width: ${(props) => props.width ? props.width : '400px' };
  border-width: 1px;
  border-style: solid;
  border-color: ${(props)=> {
    
    if(props.status=='error'){
      return 'red'
    }else if(props.status=='success'){
      console.log('hahah')
      return 'green'
    }else{
      return 'black'
    }
  }};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : '4px'};
  font-size: ${(props) => props.size ? props.size : '17px'};
  height: ${(props) => props.height ? props.height : '40px'};
  color: ${(props) => props.color};
  font: ${(props) => props.font};
  animation-name: ${(props)=>props.animation};
  padding-left: 0.25vw;
  padding-right: 0.25vw;
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


//status = error | success | undefined

const Styledinput =({label,height,width, status, statusText, ...props})=>{
  
  return(
    <div>
      <span style={{"fontSize":'19px'}}  >{label}</span>
      <StyledInput height={height} width={width} status={status} {...props} />
      {status && statusText}
    </div>
  )

}

export default Styledinput