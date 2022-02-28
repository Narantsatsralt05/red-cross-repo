import styled from "styled-components";
import { Testicon } from "../assets/icons/test-icon";
const  StyledButton = styled.button`
color:${(props)=>props.theme.palette.primary.main};
border:1px ${(props)=>props.Bcolor} solid;
background-color:${(props)=>props.BgColor};






`
 
const Button = ({ color,Bcolor , BgColor , theme}) => {
    return <StyledButton color={color} Bcolor={Bcolor} theme={theme} BgColor={BgColor}>
        <Testicon></Testicon>
    </StyledButton>
}
export default Button;