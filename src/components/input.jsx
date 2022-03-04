import styled from "styled-components";

import yup from "yup";
export const StyledInput = styled.input`
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  font-size: ${(props) => props.size};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
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