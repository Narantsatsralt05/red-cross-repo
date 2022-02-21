import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";


const StyledUl = styled.ul`
    list-style-type: none;
    margin-top: 5px;
    /* overflow: hidden; */
    background-color: #333;
    padding: 0px;
    background-color: white;
    color: black;
    font-weight: bold;
    width: 300px;
    border: 0.5px solid black;
    border-radius: 4px;
    height: 25px;
    font-size: 12px;
    display: flex;
    /* justify-content: center; */
    align-items: start;
`;

const StyledLi = styled.li`
    float: left;
    height: 100%;
    padding: 10px;
    &:hover {
        background-color: red;
    }
`;

const DropDownContent = styled.div`
    display: block;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    background-color: black;
`;

const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

const StyledA = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: white;
    padding: 10px;
    color: black;
    width: 300px;
    height: 35px;
    border-radius: 4px;
    border: 0.5px solid black;
`;
const But = styled.button`
    width:300px;
    height: 25px;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 4px;
`
const Menu = (props) => {
    const [state, setState] = useState(false);
const a = () =>{
    setState(!state)
}
    const handleClick  = (action) => {
        if (!action) return;
    
        if (props.onClick) props.onClick(action);
    }

    return (
        <>
        <But onClick={a} >Дарна уу</But>
            {state ? <DropDownContent>
                <SubA onClick={() => handleClick(state)}>
                    Aaaaaaaa
                </SubA>
                <SubA onClick={() => handleClick("Link2")}>
                    bbbbbb
                </SubA>
                <SubA onClick={() => handleClick("Link3")}>
                    cccccc
                </SubA>
            </DropDownContent > : <></>}
        </>
    )
}

export default Menu;