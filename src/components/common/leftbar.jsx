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

const Leftbar = () => {
    return (
             <Stack>
                   <Stack>
                        <Stack >
                            <Text fontWeight='300' fontSize='10px' lineHeight='12px' color='#484848'>
                                <Padding size={[6, 0, 6, 7]}  >
                                    <Stack direction='row'>
                                        <Image src={Pic}></Image>
                                        <Margin size={[2, 0, 0, 3]}>
                                            Хувь хүний мэдээлэл
                                        </Margin>
                                    </Stack>
                                </Padding>
                                <Padding size={[6, 0, 6, 7]}>
                                    <Stack direction='row'>
                                        <Image src={Help}></Image>
                                        <Margin size={[2, 0, 0, 3]}>
                                            Сайн дурын ажлын мэдээлэл
                                        </Margin>
                                    </Stack>
                                </Padding >
                                <Padding size={[6, 0, 6, 7]}>
                                    <Stack direction='row'>
                                        <Image src={gishuunInfo}></Image>
                                        <Margin size={[2, 0, 0, 3]}>
                                            Гишүүнчлэлийн мэдээлэл
                                        </Margin>
                                    </Stack>
                                </Padding>
                                <Padding size={[6, 0, 6, 7]}>
                                    <Stack direction='row'>
                                        <Image src={tuslamjInfo}></Image>
                                        <Margin size={[2, 0, 0, 3]}>
                                            Тусламжийн мэдээлэл
                                        </Margin>
                                    </Stack>
                                </Padding>
                            </Text>
                        </Stack>
                    </Stack>
             </Stack>
    )
}

export default Leftbar;