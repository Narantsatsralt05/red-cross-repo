import { Center , Text , Stack , FontSizes ,Border, Margin, Padding } from "..";
import upline from "../../assets/icon/upline.svg"
import line from "../../assets/icon/line.svg"
import shape from "../../assets/icon/Shape.svg"
import warning from "../../assets/icon/warning.svg"
import plus from "../../assets/icon/plus.svg"
import excel from "../../assets/icon/excel.svg"
import Image from 'next/image';
import Styledinput from "../core/input";
import { useTheme } from "../../theme/theme";

export const Registered = ({e}) => {
    const {color} = useTheme();
    let a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
    return (
        <Stack width="90vw" height="86vh" bg="#E5E5E5"justifyContent="space-between"  direction="column">
            <Stack width="100%" height="7%" justifyContent="space-between" alignItems="center">
                <Stack width="24%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="400" type="T2" lineHeight="16px" fontStyle="regular" style={{textAlign:"center"}}>
                    БҮРТГЭЛТЭЙ ХЭРЭГЛЭГЧИЙН ЖАГСААЛТ ({e})
                    </Text>
                    <Image src={line}></Image>
                    <Image src={plus}></Image>
                    <Text type="T2">
                        Нэмэх
                    </Text>
                </Stack>
                <Margin size={[0,80,0,0]}> 
                    <Stack justifyContent="space-evenly" gap="25">
                        <Image src={shape}></Image>
                            <Styledinput width="350px" placeholder="хайх"></Styledinput>
                        <Image src={excel}></Image>
                    </Stack>
                </Margin>
            </Stack>
            <Image src={upline}></Image>
            <Stack width="100%" height="6%" bg="#D9D9D9" justifyContent="space-evenly" alignItems="center" justifyContent="center"> 
                <Stack width="14%" >
                    <Text type="T1">
                        Регистрийн дугаар
                    </Text>
                </Stack>
                <Stack width="12%" >
                    <Margin size={[0,0,0,23]}>
                        <Text type="T1">
                            Овог
                        </Text>
                    </Margin>
                </Stack>
                <Stack  width="11%">
                    <Text type="T1">
                        Нэр
                    </Text>
                </Stack>
                <Stack  width="5%">
                    <Text type="T1">
                        Нас
                    </Text>
                </Stack>
                <Stack  width="7%">
                    <Text type="T1">
                        Хүйс
                    </Text>
                </Stack>
                <Stack  width="18%">
                    <Text type="T1">
                        Төрөл
                    </Text>
                </Stack>
                <Stack  width="11%">
                    <Text type="T1">
                        Утас
                    </Text>
                </Stack>
                <Stack  width="11%">
                    <Text type="T1">
                        Элссэн огноо
                    </Text>
                </Stack>
                <Stack  width="10%">
                    <Text type="T1" style={{textAlign:"center"}}>
                        Гишүүнчлэл огноо 
                    </Text>
                </Stack>
            </Stack>
            <Stack width="100%" height="85%" direction="column" justifyContent="space-between" style={{overflow:"auto"}}>
                {a.map((el) => {
                    return  <Margin size={[0,0,25,0]}>
                                <Stack width="100%" height="190%" bg="white"justifyContent="space-between"> 
                                    <Stack width="14%"alignItems="center">
                                        <Margin size={[0,0,0,10]}>
                                            <Text type="T2" color={color.primary.blue}>
                                                УК94092597
                                            </Text>
                                        </Margin>
                                    </Stack>
                                    <Stack width="12%" alignItems="center" >
                                        <Margin size={[0,0,0,30]}>
                                            <Text type="T2">
                                                Нямсамбуу-Cайхан
                                            </Text>
                                        </Margin>
                                    </Stack>
                                    <Stack  width="11%" alignItems="center">
                                        <Text type="T2">
                                            Даваа-Самбуу
                                        </Text>
                                    </Stack>
                                    <Stack  width="5%" alignItems="center">
                                        <Text type="T2">
                                            28
                                        </Text>
                                    </Stack>
                                    <Stack  width="7%" alignItems="center">
                                        <Text type="T2">
                                            эрэгтэй
                                        </Text>
                                    </Stack>
                                    <Stack  width="18%" alignItems="center">
                                        <Border borderRadius="5px" borderColor={color.secondary.lightblue}>
                                            <Stack bg={color.secondary.lightblue}>
                                                <Padding size={[1,10,1,10]}>
                                                    <Text type="T2">
                                                        Алтан гишүүн
                                                    </Text>
                                                </Padding>
                                            </Stack>
                                        </Border>
                                        <Margin size={[0,0,0,10]}>
                                            <Border borderRadius="5px" borderColor={color.secondary.lightgreen}>
                                                <Stack bg={color.secondary.lightgreen}>
                                                    <Padding size={[1,10,1,10]}>
                                                        <Text type="T2">
                                                            СДИ
                                                        </Text>
                                                    </Padding>
                                                </Stack>
                                            </Border>
                                        </Margin>
                                    </Stack>
                                    <Stack  width="11%" alignItems="center">
                                        <Text type="T2">
                                            88109325
                                        </Text>
                                    </Stack>
                                    <Stack  width="11%" alignItems="center">
                                        <Text type="T2">
                                            2018.05.01
                                        </Text>
                                    </Stack>
                                    <Stack  width="10%" alignItems="center">
                                        <Margin size={[0,10,0,0]}>
                                            <Image src={warning}></Image>
                                        </Margin>
                                        <Text type="T2" color={color.secondary.orange}>
                                            2019.05.01
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Margin>
                })}
            </Stack>
        </Stack>
    )
}