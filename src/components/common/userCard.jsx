import { Stack, Border, Box, Padding, Picture, Text, Margin } from '..';
import blue from '../../assets/icon/blue.svg';
// import grey from '../../assets/icon/grey.svg';
// import green from '../../assets/icon/green.svg';
// import female from "../../assets/icon/female.svg"


export const Usercard = ({  firstName, lastName, register, age, gender ,bluebadge,greenbadge,greybadge }) => {
  return (
    <Box>
      <Border borderRadius="10px" width="280px" overFlow="hidden" borderColor="#F9F9F9">
        <Stack height="170px" width="300px" bg="#F9F9F9" direction="column" gap='20px'>
          <Padding size="15">
            <Stack direction="row" borderColor="#E3E3E3" width="100%" alignItems="center" gap="10">
              <Border borderRadius="50%" overFlow="hidden" borderColor="#E3E3E3">
                <Stack bg="#E3E3E3" height="65px" width="65px" justifyContent="center" alignItems="center">
                  {/* <img src={female.src} height="45%" width="45%"/> */}
                </Stack>
              </Border>
              <Stack direction="column" gap="10">
                <Text fontSize="15px" fontFamily="Roboto" fontWeight="300 Light">
                  ОВОГ: {firstName}
                </Text>
                <Text fontSize="15px" fontFamily="Roboto" fontWeight="300 Light">
                  НЭР: {lastName}
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
                
              <Stack direction="column" gap="5" width="50%">
                  <Padding size={[25,0,0,0]}>
                    <Margin size={[0, 0, 0, 22]}>
                  <Text fontSize="15px" fontFamily="Roboto" fontWeight="300 Light">
                    РД: {register}
                  </Text>
                </Margin>
                <Margin size={[0, 0, 0, 10]}>
                  <Text fontSize="15px" fontFamily="Roboto" fontWeight="300 Light">
                    НАС: {age}
                  </Text>
                </Margin>
                <Margin size={[0, 0, 0, 0]}>
                  <Text fontSize="15px" fontFamily="Roboto" fontWeight="300 Light">
                    ХҮЙС: {gender}
                  </Text>
                </Margin>
                </Padding>
              </Stack>
              <Padding size={[40, 0, 0, 0]}>
              <Stack direction="row" gap={5} >
                  {
                      bluebadge ? <Border borderRadius="5px" borderColor="#0066B3CC">
                    <Stack height={'35px'} width={'35px'} bg="#0066B3CC" justifyContent="center" alignItems="center">
                      <img src={blue.src} height={'65%'} width={'65%'} />
                    </Stack>
                  </Border> : ""
                  }
                  {
                      greybadge ? <Border borderRadius="5px" borderColor="#626262">
                    <Stack height={'35px'} width={'35px'} bg="#626262" justifyContent="center" alignItems="center">
                      {/* <img src={grey.src} height={'65%'} width={'65%'} /> */}
                    </Stack>
                  </Border> : ""
                  }
                  {
                      greenbadge ? <Border borderRadius="5px" borderColor="#1A9461">
                    <Stack height={'35px'} width={'35px'} bg="#1A9461" justifyContent="center" alignItems="center">
                      {/* <img src={green.src} height={'65%'} width={'65%'} /> */}
                    </Stack>
                  </Border> : ""
                  }
                    
                
              </Stack>
              </Padding>
            </Stack>
          </Padding>
        </Stack>
      </Border>
    </Box>
  );
};
