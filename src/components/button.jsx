import styled from "styled-components";
const  StyledButton = styled.button`
color:${(props)=>props.theme.palette.primary.main};
border:1px ${(props)=>props.Bcolor} solid;
background-color:${(props)=>props.BgColor};
width:${(props)=>props.width};
heigth:${(props)=>props.height};
border-radius:${(props)=>props.radius};
cursor:pointer;






`
 
const Button = ({ color,Bcolor , BgColor , theme , title , width , heigth , radius}) => {
    return <StyledButton radius={radius} color={color} Bcolor={Bcolor} theme={theme} BgColor={BgColor} width={width} height={heigth}>
        <h1>{title}</h1>
        
    </StyledButton>
}
export default Button;