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
// import tuslamjInfo from "../../assets/icon/help.svg"
import prof from "../../assets/icon/prof.svg"
import { Padding } from "../core/padding";
import { Border } from "../core/border";
import { color } from "../../theme/color";



export const Header = ({Where , user}) => {
    return (
            <Stack width="100vw"height="7vh" >
                <Stack bg="#0066B3" width="100vw" height="7vh" >
                    <Center>
                        <Stack width="3vw" height="6vh" justifyContent='center'>
                            <Image src={hamburger}></Image>
                        </Stack>
                        <Stack width="8vw" height="4vh"  justifyContent='space-evenly' alignItems="center" >
                            <Image src={Logo} ></Image>
                            <Text type="T1" color="white">МУЗН</Text>
                        </Stack>
                        <Stack width="4vw" height="4vh" justifyContent='center'>
                            <Image src={line}></Image>
                        </Stack>
                        <Stack width="65vw" height="4vh" alignItems="center">
                            <Text type="T1" color="white">{Where} ДАРХАН АЙМГИЙН УЛААН ЗАГАЛМАЙ ХОРОО</Text>
                        </Stack>
                        <Stack justifyContent="space-between" alignItems="center" width="12vw">
                            <Text color={color.primary.white} fontWeight="400">
                                bayanzurkh@redcross.mn
                            </Text>
                            <Image src={prof}></Image>
                        </Stack>
                    </Center>
                </Stack>
            </Stack>
    )
}


