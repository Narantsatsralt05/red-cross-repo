import { color, height } from '@mui/system';
import React from 'react';
import {
  Button,
  Center,
  Picture,
  Margin,
  Padding,
  Position,
  Stack,
  StyledBorder,
  Text,
  StyledInput,
  Styledoneletter,
} from '../components';

const Test = () => {
  return (
    <Center>
      <Stack direction="column">
        <Text FontSize="1.5rem">INPUT</Text>
        <div className="" style={{ width: '500px' }}>
          <Margin size={[10, 0, 0, 0]}>
            <StyledBorder radius="10px" color="rgba(0, 0, 0, 0.1);">
              <Margin size={[35, 0, 35, 150]}>
                <StyledInput />
              </Margin>
            </StyledBorder>
          </Margin>
        </div>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Buttons</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <StyledBorder radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Margin size={[35, 0, 35, 100]}>
                  <Stack direction="row">
                    <Button bc="1px solid grey" Color="rgb(25, 118, 210)" width="100px" height="30px" radius="8px">
                      <Center>Button</Center>
                    </Button>
                    <Margin size={[0, 0, 0, 30]}>
                      <Button
                        bc="1px solid grey"
                        Color="white"
                        width="100px"
                        height="30px"
                        radius="8px"
                        bgColor="rgb(25, 118, 210)"
                      >
                        <Center>Button</Center>
                      </Button>
                    </Margin>
                  </Stack>
                </Margin>
              </StyledBorder>
            </Margin>
          </div>
        </Margin>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Style done letter</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <StyledBorder radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Margin size={[35, 0, 35, 150]}>
                  <Stack direction="row">
                    <Styledoneletter width="30px" height="30px" />
                    <Margin size={[0, 0, 0, 10]}>
                      <Styledoneletter width="30px" height="30px" />
                    </Margin>
                  </Stack>
                </Margin>
              </StyledBorder>
            </Margin>
          </div>
        </Margin>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Image</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <StyledBorder radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Picture
                  src="https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg"
                  width="500px"
                />
              </StyledBorder>
            </Margin>
          </div>
        </Margin>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Position</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <StyledBorder radius="10px" color="rgba(0, 0, 0, 0.1);">
              </StyledBorder>
            </Margin>
          </div>
        </Margin>
      </Stack>
      <Position position="absolute">Absolute</Position>
      <Position position="relative">relative</Position>
      <Position position="fixed">Fixed</Position>
    </Center>
  );
};

export default Test;
