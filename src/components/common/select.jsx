import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import ArrowDown from "../../assets/icon/ArrowDown.jsx";
import { Stack, Text } from '../index';
import ArrowDownSecond from "../../assets/icon/arrDown.jsx";

const DropDownContent = styled.div`
    display: block;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    background-color: black;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    box-sizing: border-box;
    background-color: white;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
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
    width: ${({ width }) => width};
    border-radius: 10%;
    &:hover {
        background-color: #d9e6f2;
        border-radius: 4px;
        border: 0.4px solid #d9e6f2;
    };
`;
const StyledSelect = styled.div`
    width: ${({ width }) => width ? width : '400px'};
    height:  ${({ height }) => height ? height : '35px'};
    background-color: white;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
`;

const Select = ({ value, onClick }) => {
    return (
        <Stack>
            <StyledSelect onClick={onClick} width='311px' height='25px' >
                <Text style={{ marginLeft: '10px' }}>{value}</Text>
                <div style={{ width: '30px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowDown />
                </div>
            </StyledSelect>
        </Stack>
    )
}
const Dropdown = (props) => {
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
                <Select type="button" placeholder={options} value={options} onClick={Click} rightIcon={ArrowDownSecond}>
                </Select>
                {state &&
                <DropDownContent onClick={Click} width='311px'>
                    {
                        props.arr.map(Element =>
                            <ToUseOptions onClick={() => handleClick(Element)}>
                                {Element.text}
                            </ToUseOptions>
                        )
                    }
                </DropDownContent >}
            </div>
        </>
    )
}

export default Dropdown;