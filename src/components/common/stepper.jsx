import React, { useState } from 'react';
import { Border, Box, Button, Margin, Stack, Text } from '..';

export const Stepper = () => {
  const [step, setStep] = useState(1);
  const next = () => {
    setStep(step + 1);
  };
  if (step === 5) {
    setStep(1);
  }
  return (
    <Box>
      <Border borderColor="#E5E5E5" width="1" borderRadius="10px" overFlow="hidden">
        <Stack direction="column" width="99.9vw" bg="#FAFAFA">
          <Margin size={[20, 0, 0, 20]}>
            <Text color="#000" fontSize="2vw">
              Хэрэглэгчийн дэлгэрэнгүй мэдээлэл бүртгэх
            </Text>
          </Margin>
          <Margin size={[20, 0, 20, 20]}>
            <Stack direction="row" alignItems="center">
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Border borderRadius="50%" borderColor="#0066B3" overFlow="hidden">
                  <Stack
                    width="40px"
                    height="40px"
                    justifyContent="center"
                    alignItems="center"
                    bg={step === 1 ? '#0066B3' : '#fff'}
                  >
                    <Text color={step === 1 ? '#fff' : 'black'}>1</Text>
                  </Stack>
                </Border>
                <Margin size={[0, 20, 0, 20]}>
                  <Text fontSize="1vw">ХУВЬ ХҮНИЙ ТАЛААРХ МЭДЭЭЛЭЛ</Text>
                </Margin>
                <Stack width="30px" height="2px" bg="#0066B3" />
              </Stack>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Margin size={[0, 20, 0, 20]}>
                  <Border borderRadius="50%" borderColor="#D0D0D0" overFlow="hidden">
                    <Stack
                      width="40px"
                      height="40px"
                      justifyContent="center"
                      alignItems="center"
                      bg={step === 2 ? '#0066B3' : '#fff'}
                    >
                      <Text color={step === 2 ? '#fff' : 'black'}>2</Text>
                    </Stack>
                  </Border>
                </Margin>
                <Text fontSize="1vw">Сайн дурын ажлын туршлага</Text>
                <Margin size={[0, 20, 0, 20]}>
                  <Stack width="30px" height="2px" bg="#0066B3" />
                </Margin>
              </Stack>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Border borderRadius="50%" borderColor="#D0D0D0" overFlow="hidden">
                  <Stack
                    width="40px"
                    height="40px"
                    justifyContent="center"
                    alignItems="center"
                    bg={step === 3 ? '#0066B3' : '#fff'}
                  >
                    <Text color={step === 3 ? '#fff' : 'black'}>3</Text>
                  </Stack>
                </Border>
                <Margin size={[0, 20, 0, 20]}>
                  <Text fontSize="1vw">Хамрагдсан сургалт</Text>
                </Margin>
                <Stack width="30px" height="2px" bg="#0066B3" />
              </Stack>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Margin size={[0, 20, 0, 20]}>
                  <Border borderRadius="50%" borderColor="#D0D0D0" overFlow="hidden">
                    <Stack
                      width="40px"
                      height="40px"
                      justifyContent="center"
                      alignItems="center"
                      bg={step === 4 ? '#0066B3' : '#fff'}
                    >
                      <Text color={step === 4 ? '#fff' : 'black'}>4</Text>
                    </Stack>
                  </Border>
                </Margin>
                <Text fontSize="1vw">УР ЧАДВАР</Text>
              </Stack>
            </Stack>
          </Margin>
        </Stack>
      </Border>
      <Button width="126px" height="50px" bgColor="#0066B3" borderRadius="2px" onClick={next}>
        <Text cursor="pointer" color="#fff">
          Дараагийн алхам
        </Text>
      </Button>
    </Box>
  );
};
