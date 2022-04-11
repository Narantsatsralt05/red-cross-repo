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
import tuslamj from "../../assets/icon/saindur.svg"
import gishuunInfo from "../../assets/icon/people.svg"
import tuslamjInfo from "../../assets/icon/help.svg"
import { Padding } from "../core/padding";
import { Border } from "../core/border";
import { useState } from "react";

const Leftbar = () => {
    const [info , setInfo] = useState(["#484848"]);
    const [work , Setwork] = useState(["#484848"]);
    const [per , Setper] = useState(["#484848"]);
    const [help , Sethelp] = useState(["#484848"]);
    const Info = () => {
        setInfo(["black" , "#0066B3"])
        Setwork(["#484848"])
        Setper(["#484848"])
        Sethelp(["#484848"])
    }
    const Work = () => {
        Setwork(["black" , "#0066B3"])
        setInfo(["#484848"])
        Setper(["#484848"])
        Sethelp(["#484848"])
    }
    const Perinfo = () => {
        Setper(["black" , "#0066B3"])
        Setwork(["#484848"])
        setInfo(["#484848"])
        Sethelp(["#484848"])
    }
    const Help = () => {
        Sethelp(["black" , "#0066B3"])
        Setwork(["#484848"])
        Setper(["#484848"])
        setInfo(["#484848"])
    }
    return (
        <Border borderColor="#E5E5E5" borderRadius="10px" >
             <Stack height="90vh" width="280px" direction="column"  >
                <Padding size={[6, 0, 7, 0]}  >
                    <Border borderWidth={info.length > 1 ? [0, 0, 0, 1] : [0, 0, 0, 0]} borderColor={info[1]}>
                        <Stack direction='row'  width="120%"height="100%" onClick={Info}cursor="pointer" alignItems="center">
                            <Margin size={[2, 0, 0, 10]}>
                                <Image src={Pic}></Image>
                            </Margin>
                            <Margin size={[2, 0, 4, 10]}>
                                <Text fontWeight={info.length > 1 ? "400" : "200"} color={info[0]}>Хувь хүний мэдээлэл</Text>
                            </Margin>
                        </Stack>
                    </Border>
                </Padding>
                <Padding size={[6, 0, 6, 0]}>
                    <Border borderWidth={work.length > 1 ? [0, 0, 0, 1] : [0, 0, 0, 0]} borderColor={work[1]}>
                        <Stack direction='row' height="140%" onClick={Work} cursor="pointer" alignItems="center">
                            <Margin size={[2, 0, 0, 10]}>
                                <Image src={tuslamj}></Image>
                            </Margin>
                            <Margin size={[2, 0, 4, 10]}>
                                <Text fontWeight={work.length > 1 ? "400" : "200"} color={work[0]}>Сайн дурын ажлын мэдээлэл</Text>
                            </Margin>
                        </Stack>
                    </Border>
                </Padding >
                <Padding size={[6, 0, 6, 0]}>
                    <Border borderWidth={per.length > 1 ? [0, 0, 0, 1] : [0, 0, 0, 0]} borderColor={per[1]}>
                        <Stack direction='row' height="140%" onClick={Perinfo}  cursor="pointer" alignItems="center">
                             <Margin size={[2, 0, 0, 10]}>
                                <Image src={ gishuunInfo}></Image>
                            </Margin>
                            <Margin size={[2, 0, 4, 10]}>
                                <Text fontWeight={per.length > 1 ? "400" : "200"} color={per[0 ]}>Гишүүнчлэлийн мэдээлэл</Text>
                            </Margin>
                        </Stack>
                    </Border>
                </Padding>
                <Padding size={[6, 0, 6, 0]}>
                    <Border borderWidth={help.length > 1 ? [0, 0, 0, 1] : [0, 0, 0, 0]} borderColor={help[1]}>
                        <Stack direction='row'  height="140%" onClick={Help}  cursor="pointer" alignItems="center" >
                            <Margin size={[2, 0, 0, 10]}>
                                <Image src={tuslamjInfo}></Image>
                            </Margin>
                            <Margin size={[2, 0, 4, 10]}>
                                <Text fontWeight={help.length > 1 ? "400" : "200"}  color={help[0]}>Тусламжийн мэдээлэл</Text>
                            </Margin>
                        </Stack>  
                    </Border>
                </Padding>
             </Stack>
             <p style={{ fontSize: '10px', color: '#757575', fontWeight: '300', left: '14px', bottom: '12px' }}>@ 2018-2021 Монголын улаан загалмай нийгэмлэг</p>
        </Border>
    )
}

export default Leftbar;