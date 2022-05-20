import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import ArrowDown from '../../assets/icon/ArrowDown.jsx';
import { Stack, Text } from '../index';
import ArrowDownSecond from '../../assets/icon/arrDown.jsx';

const OnDesktop = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
`;
const OnMobile = styled.div`
  @media (max-width: 460px) {
    display: none;
  }
`;
const OnMobileText = styled.div`
  @media (min-width: 1050px) {
    display: none;
  }
`;
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
  width: ${({ width }) => (width ? width : '300px')};
  border-radius: 10%;
  &:hover {
    background-color: #d9e6f2;
    border-radius: 4px;
    border: 0.4px solid #d9e6f2;
  }
`;
const StyledSelect = styled.div`
  @media (max-width: 400px) {
    width: '250px';
  }
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : '35px')};
  background-color: white;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '2px')};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = (props) => {
  const Select = ({ value, onClick }) => {
    return (
      <Stack>
        <StyledSelect
          onClick={onClick}
          width={props.width ? props.width : '311px'}
          height={props.height ? props.height : '25px'}
          borderRadius={props.borderRadius ? props.borderRadius : '2px'}
        >
          <Text style={{ marginLeft: '10px' }}>{value}</Text>
          <div
            style={{ width: '30px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ArrowDown />
          </div>
        </StyledSelect>
      </Stack>
    );
  };
  const [state, setState] = useState(false);
  const Click = () => {
    setState(!state);
  };
  const [options, setOptions] = useState('');
  const handleClick = (action) => {
    setOptions(action);
    if (!action) return;
    if (props.onClick) props.onClick(action);
    props.setfirstValue && props.setfirstValue(action);
    props.setdropValue && props.setdropValue({ ...props.dropValue, [props.id]: action });
  };
  return (
    <>
      <div>
        <Select
          type="button"
          placeholder={options}
          value={options ? options : props.value}
          onClick={Click}
          rightIcon={ArrowDownSecond}
        ></Select>
        {state && (
          <DropDownContent onClick={Click} width={props.width ? props.width : '311px'} height={'35px'}>
            {/* <Border borderColor="black" borderRadius="8px"> */}
              {props.arr.map((Element) => (
                <ToUseOptions onClick={() => handleClick(Element)}>{Element}</ToUseOptions>
              ))}
            {/* </Border> */}
          </DropDownContent>
        )}
      </div>
    </>
  );
};

export default Dropdown;
