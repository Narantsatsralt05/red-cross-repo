import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import ArrowDown from "../icons/ArrowDown.jsx";
import { Stack, Text } from '../index';

const DropDownContent = styled.div`
    display: block;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    background-color: black;
    border: 0.4px solid gray;
    border-radius: 5px;
    background-color: white;
`;


const StyledATag = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

const ToUseOptions = styled(StyledATag)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: white;
    padding: 10px;
    color: black;
    width: 300px;
    border-radius: 10%;
    &:hover {
        background-color: #d9e6f2;
        border-radius: 4px;
        border: 0.4px solid ##d9e6f2;
    };
`;
const StyledSelect = styled.div`
    width: 311px;
    height: 25px;
    background-color: white;
    border: 0.4px solid gray;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Select = ({ value, onClick }) => {
    return (
        <Stack>
            <StyledSelect onClick={onClick}>
                <Text style={{ marginLeft: '10px' }}>{value}</Text>
                <div style={{ width: '30px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowDown />
                </div>
            </StyledSelect>
        </Stack>
    )
}
const Menu = (props) => {
    const [state, setState] = useState(false);
    const Click = () => {
        setState(!state)
    }
    const [options, setOptions] = useState('')
    const handleClick = (action) => {
        setOptions(action.text)
        if (!action) return;
        if (props.onClick) props.onClick(action);
    }
    return (
        <>
            <div>
                <Select type="button" placeholder={options} value={options} onClick={Click} rightIcon={ArrowDown}>
                </Select>

            </div>
            {state &&
                <DropDownContent onClick={Click} >
                    {
                        props.arr.map(Element =>
                            <ToUseOptions onClick={() => handleClick(Element)}>
                                {Element.text}
                            </ToUseOptions>
                        )
                    }
                </DropDownContent >}
        </>
    )
}

export default Menu;