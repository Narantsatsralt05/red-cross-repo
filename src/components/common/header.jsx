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
    return (
            <Stack width="100vw"height="7vh" >
                <Stack bg="#0066B3" width="110vw" height="7vh">
                    <Center>
                        <Stack width="6vw" height="4vh" justifyContent='center'>
                            <Image src={Arrow}></Image>
                        </Stack>
                        <Stack width="4vw" height="8vh" justifyContent='center'>
                            <Button><Image src={hamburger}></Image></Button>
                        </Stack>
                        <Stack width="8vw" height="4vh"  justifyContent='space-evenly' alignItems="center" >
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
                    </Center>
                </Stack>
            </Stack>
    )
}


export default Header;