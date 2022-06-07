import styled from 'styled-components';
import { theme } from '../../theme/theme';
export const StyledInput = styled.input`
  width: ${(props) => props.width ? props.width : '400px'};
  border: 0.4px solid gray;
  @media (max-width: 400px) {
    width:'200px' !important
  }
  border-color: ${(props) => {
    if (props.status == 'error') {
      return 'red'
    } else if (props.status == 'success') {
      return 'green'
    } if (props.status == 'undefined') {
      return 'black'
    }
    return 'black'
  }};
  background-color: ${(props) => {
    if (props.disabled) {
      return 'rgba(196, 196, 196, 0.5);';
    } else {
      return '#FFFFFF';
    }
  }};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : '4px'};
  font-size: ${(props) => props.size ? props.size : '17px'};
  height: ${(props) => props.height ? props.height : '35px'};
  color: ${(props) => props.color};
  font: ${(props) => props.font};
  animation-name: ${(props) => props.animation};
  padding-left: 0.25vw;
  padding-right: 0.25vw;
  display: flex;
  align-items: center;
  ::-webkit-inner-spin-button{
        -webkit-appearance:  none; 
        margin: 0; 
    }
    padding:15px;

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

const Styledinput = ({ label, height, width, status, statusText, disabled, ...props }) => {

  return (
    <div>
      <span style={{ "fontSize": '19px' }}  >{label}</span>
      <StyledInput height={height} width={width} status={status} {...props} disabled={disabled} />
      {status && statusText}
    </div>
  )

}

export default Styledinput