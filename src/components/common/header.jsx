import { Center } from "../core/center";
import { Stack } from '../core/stack'
import Arrow from "../../assets/icon/arrow.svg"
import Logo from "../../assets/icon/logo.svg"
import line from "../../assets/icon/line.svg"
import { Box } from "../core/box";
import Image from "next/image";
import { Button } from "../core/button";
import { Text } from "../core/text";
import { Margin } from "../core/margin";
import group from "../../assets/icon/group.svg"
import hamburger from "../../assets/icon/hamburger.svg"
import Pic from "../../assets/icon/profile.svg"
import Help from "../../assets/icon/saindur.svg"
import gishuunInfo from "../../assets/icon/people.svg"
import tuslamjInfo from "../../assets/icon/help.svg"
import { Padding } from "../core/padding";
import { Border } from "../core/border";



const Header = ({Where , user}) => {
    return <Stack width="100vw"height="7vh" bg="red">
        <Stack bg="#0066B3" width="100vw" height="7vh">
            <Center>
            <Stack width="6vw" height="4vh" justifyContent='center'>
               <Image src={Arrow}></Image>
            </Stack>
            <Stack width="4vw" height="8vh" justifyContent='center'>
                <Button><Image src={hamburger}></Image></Button>
            </Stack>
            <Stack width="10vw" height="4vh"  justifyContent='space-evenly' alignItems="center" >
                <Image src={Logo} ></Image>
                <Text fontWeight="500"  fontSize="19px" color="white">МУЗН</Text>
            </Stack>
            <Stack width="4vw" height="4vh" justifyContent='center'>
                <Image src={line}></Image>
            </Stack>
            <Stack width="65vw" height="4vh" alignItems="center">
                
                    <Text fontStyle="bold" fontWeight="700" fontSize="17px" color="white">{Where}АЙМГИЙН УЛААН ЗАГАЛМАЙ ХОРОО</Text>
               
            </Stack>
            <Stack>{user}</Stack>
            <Stack></Stack>
            </Center>
        </Stack>
        <Margin size={[10, 0, 0, 3]}>
        <Border borderColor="#E5E5E5" >

    
        <Stack height="90vh" width="15vw" >
                                <Stack >
                                    <Text fontWeight='300' fontSize='10px' lineHeight='12px' color='#484848'>
                                        <Padding size={[10, 0, 6, 7]}  >
                                            <Stack direction='row'>
                                                <Image src={Pic}></Image>
                                                <Margin size={[2, 0, 0, 3]}>
                                                    <Button>
                                                        <Text fontSize="15px"> Хувь хүний мэдээлэл</Text>
                                                    </Button>
                                                </Margin>
                                            </Stack>
                                        </Padding>
                                        <Padding size={[10, 0, 6, 7]}>
                                            <Stack direction='row'>
                                                <Image src={Help}></Image>
                                                <Margin size={[2, 0, 0, 3]}>
                                                <Button>
                                                        <Text fontSize="15px">  Сайн дурын ажлын мэдээлэл</Text>
                                                    </Button>
                                                    
                                                </Margin>
                                            </Stack>
                                        </Padding >
                                        <Padding size={[10, 0, 6, 7]}>
                                            <Stack direction='row'>
                                                <Image src={gishuunInfo}></Image>
                                                <Margin size={[2, 0, 0, 3]}>
                                                <Button>
                                                        <Text fontSize="15px">  Гишүүнчлэлийн мэдээлэл</Text>
                                                    </Button>
                                                   
                                                </Margin>
                                            </Stack>
                                        </Padding>
                                        <Padding size={[10, 0, 6, 7]}>
                                            <Stack direction='row'>
                                                <Image src={tuslamjInfo}></Image>
                                                <Margin size={[2, 0, 0, 3]}>
                                                <Button>
                                                        <Text fontSize="15px">   Тусламжийн мэдээлэл</Text>
                                                    </Button>
                                                  
                                                </Margin>
                                            </Stack>
                                        </Padding>
                                    </Text>
                                </Stack>
                        </Stack>
                        </Border>
                        </Margin>
    </Stack>
    
}


export default Header;