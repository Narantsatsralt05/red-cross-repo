import { color, height } from '@mui/system';
import React from 'react';
import { useAuthContext } from '../common/context/AuthContext';
import {
  Button,
  Center,
  Picture,
  Margin,
  Padding,
  Position,
  Stack,
  Border,
  Text,
  StyledInput,
  Styledoneletter
} from '../components';

const Test = () => {
  const { user } = useAuthContext()
  return (
    <Center>
      <Stack direction="column">
        <Text FontSize="1.5rem">INPUT</Text>
        <div className="" style={{ width: '500px' }}>
          <Margin size={[10, 0, 0, 0]}>
            <Border radius="10px" color="rgba(0, 0, 0, 0.1);">
              <Margin size={[35, 0, 35, 150]}>
                <StyledInput width={200} />
              </Margin>
            </Border>
          </Margin>
        </div>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Buttons</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <Border radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Margin size={[35, 0, 35, 100]}>
                  <Stack direction="row">
                    <Button
                      bc="1px solid grey"
                      Color="rgb(25, 118, 210)"
                      width="100px"
                      height="30px"
                      borderRadius="8px"
                    >
                      <Center>Button</Center>
                    </Button>
                    <Margin size={[0, 0, 0, 30]}>
                      <Button
                        bc="1px solid grey"
                        Color="white"
                        width="100px"
                        height="30px"
                        borderRadius="8px"
                        bgColor="rgb(25, 118, 210)"
                      >
                        <Center>Button</Center>
                      </Button>
                    </Margin>
                  </Stack>
                </Margin>
              </Border>
            </Margin>
          </div>
        </Margin>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Style done letter</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <Border radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Margin size={[35, 0, 35, 150]}>
                  <Stack direction="row">
                    <Styledoneletter width="30px" height="30px" />
                    <Margin size={[0, 0, 0, 10]}>
                      <Styledoneletter width="30px" height="30px" />
                    </Margin>
                  </Stack>
                </Margin>
              </Border>
            </Margin>
          </div>
        </Margin>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Padding</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <Border radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Margin size={[35, 130, 35, 100]}>
                  <Border color="rgba(0, 0, 0, 0.1);" borderRadius="8px">
                    <Padding size={100}>Padding</Padding>
                  </Border>
                </Margin>
              </Border>
            </Margin>
          </div>
        </Margin>
        <Margin size={[50, 0, 0, 0]}>
          <Text FontSize="1.5rem">Position</Text>
          <div className="" style={{ width: '500px' }}>
            <Margin size={[10, 0, 0, 0]}>
              <Border radius="10px" color="rgba(0, 0, 0, 0.1);">
                <Margin size={[35, 130, 35, 100]}>
                  <Border color="rgba(0, 0, 0, 0.1);">
                    <Position position="relative">
                      <Border color="rgba(0, 0, 0, 0.1);">
                        <Margin size={[35, 130, 80, 100]}>
                          <Position position="absolute">
                            <Margin size={[10, 0, 0, 0]}>
                              <Text>MY MAN idk my brain isn't braining rn</Text>
                            </Margin>
                          </Position>
                        </Margin>
                      </Border>
                    </Position>
                  </Border>
                </Margin>
              </Border>
            </Margin>
          </div>
        </Margin>
        
      </Stack>
    </Center>
  );
};

export default Test;