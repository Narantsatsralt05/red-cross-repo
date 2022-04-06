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
        <Border borderColor="#E5E5E5" borderRadius="10px" >
             <Stack height="90vh" width="100%" direction="column"  >
                    <Padding size={[6, 0, 6, 0]}  >
                        <Stack direction='row'  height="140%" >
                            <Margin size={[2, 0, 0, 10]}>
                                <Image src={Pic}></Image>
                            </Margin>
                            <Margin size={[2, 0, 0, 15]}>
                                Хувь хүний мэдээлэл
                            </Margin>
                        </Stack>
                    </Padding>
                    <Padding size={[6, 0, 6, 0]}>
                        <Stack direction='row' height="140%">
                        <Margin size={[2, 0, 0, 10]}>
                                <Image src={tuslamjInfo}></Image>
                            </Margin>
                            <Margin size={[2, 0, 0, 15]}>
                            Сайн дурын ажлын мэдээлэл
                            </Margin>
                        </Stack>
                    </Padding >
                    <Padding size={[6, 0, 6, 0]}>
                        <Stack direction='row' height="140%">
                             <Margin size={[2, 0, 0, 10]}>
                                <Image src={ gishuunInfo}></Image>
                            </Margin>
                            <Margin size={[2, 0, 0, 15]}>
                            Гишүүнчлэлийн мэдээлэл
                            </Margin>
                        </Stack>
                    </Padding>
                    <Padding size={[6, 0, 6, 0]}>
                        <Stack direction='row'  height="140%" >
                        <Margin size={[2, 0, 0, 10]}>
                                <Image src={Help}></Image>
                            </Margin>
                            <Margin size={[2, 0, 0, 15]}>
                            Тусламжийн мэдээлэл
                            </Margin>
                        </Stack>
                    </Padding>
             </Stack>
        </Border>
    )
}

export default Leftbar;