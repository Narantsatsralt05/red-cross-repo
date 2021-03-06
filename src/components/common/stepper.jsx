import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Border, Box, Button, Margin, Position, Stack, Text } from '..';
import theme from "../../theme/theme"
import Success from '../../pages/successPage';
import UserInfo from '../../pages/user/Info';
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

export const Stepper = ({ data, setStep, step, next }) => {

  if (step === 5) {
    return <Success />;
  }
  return (
    <Box>
      <Border borderColor="#E5E5E5" borderRadius="10px" overFlow="hidden" style={{ boxShadow: "0 5px 4px 2px #dadada" }} >
          <Stack direction="column" width="99.9vw" bg="#white">
            <Margin size={[20, 0, 0, 20]}>
              <Text color="#000" fontSize="1.5vw" textTransform="uppercase">
                {data.header}
              </Text>
            </Margin>
            <Margin size={[20, 0, 20, 0]}>
              <Stack direction="row" alignItems="center">
                {data.headers.map((item, key) => {
                  return (
                    <Stack direction="row" alignItems="center" flexWrap="wrap" >
                      <Margin size={[0, 20, 0, 20]}>
                        <Border
                          borderRadius="50%"
                          borderColor={step === key + 1 ? '#0066B3' : '#D0D0D0'}
                          overFlow="hidden"
                        >
                          <Stack
                            width="40px"
                            height="40px"
                            justifyContent="center"
                            alignItems="center"
                            bg={step === key + 1 ? '#0066B3' : '#fff'}
                          >
                            <Text color={step === key + 1 ? '#fff' : 'black'}>{key + 1}</Text>
                          </Stack>
                        </Border>
                      </Margin>
                      <OnDesktop>
                        <Margin size={[0, 20, 0, 0]}>
                          <Text fontSize="1vw" fontWeight="300">
                            {item}
                          </Text>
                        </Margin>
                      </OnDesktop>
                      <OnMobile>
                        {key === data.headers.length - 1 ? <></> : <Stack width="30px" height="2px" bg="#0066B3" />}
                      </OnMobile>
                    </Stack>
                  );
                })}
              </Stack>
            </Margin>
            <OnMobileText>
              <Margin size={[0, 0, 20, 20]}>
                <Text fontSize="1.5vw" fontWeight="300">
                  {data.headers[step - 1]}
                </Text>
              </Margin>
            </OnMobileText>
          </Stack>
      </Border>
      <Margin size={[10, 0, 0, 0]}>
        <Border borderColor="#E5E5E5" borderRadius="10px" overFlow="hidden">
          <Stack width="99.9vw" bg="#FAFAFA" height="80vh" direction="column" style={{overflow: 'scroll'}}>
            {step === 1 ? (
              <UserInfo isStep={true} setStep={setStep} step={step} next={next} />
            ) : step === 2 ? (
              <div>{data.body[1]}</div>
            ) : step === 3 ? (
              <div>{data.body[2]}</div>
            ) : step === 4 ? (
              <div>{data.body[3]}</div>
            ) : (
              ''
            )}
            {step != 1 && <Margin size={[50, 0, 0, 0]}>
              <Button style={{ marginLeft: '30px' }} width="230px" height="40px" bc='1px solid #0066B3' bgColor="#0066B3" borderRadius="5px" onClick={next}>
                <Text cursor="pointer" color="#fff" >
                  ?????????????????? ??????????
                </Text>
              </Button>
            </Margin>}

          </Stack>
        </Border>
      </Margin>
    </Box>
  );
};