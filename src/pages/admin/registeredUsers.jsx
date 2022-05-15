import { Stack , Header , Text , Margin, Registered } from "../../components"
import { color } from "../../theme/color"
import hands from "../../assets/icon/hands.svg"
import group from "../../assets/icon/browngroup.svg"
import green from "../../assets/icon/greenhand.svg"
import hamarrow from "../../assets/icon/hamarrow.svg"
import Image from "next/image";
export const Registeredusers = () => {
    return <Stack bg={color.primary.grey} width="100vw" height="100vh" direction="column" justifyContent="space-between">
        <Stack width="100%" height="13%" direction="column">
        <Header></Header>
        <Stack bg={color.secondary.grey} width="100vw" height="6vh" style={{boxShadow:"0px  13px  10px  -15px  #111"}}>
            <Margin size={[10,0,0,30]}>
            <Stack  alignItems="center" width="20vw"height="80%" direction="column" justifyContent="space-evenly">
                <Text type="T1">
                БҮРТГЭЛТЭЙ ХЭРЭГЛЭГЧИЙН МЭДЭЭЛЭЛ
                </Text>
                <Margin size={[0,30,0,0]}>
                    <Stack width="17vw" style={{borderTop:"1px blue solid"}}>
           
                    </Stack>
                </Margin>
            </Stack>
            </Margin>
        </Stack>
        </Stack>
        <Stack bg={color.primary.grey} width="100vw" height="86vh" justifyContent="space-between" >
            <Stack  bg={color.secondary.lightgrey} width="5vw" height="100%" style={{boxShadow:"13px  0px  10px  -15px  #111"}} direction="column"justifyContent="space-between">
                <Stack  width="100%" height="30vh" justifyContent="space-evenly" alignItems="center" direction="column">
                    <Image src={hands}></Image>
                    <Image src={group}></Image>
                    <Image src={green}></Image>
                </Stack>
                <Margin size={[0,0,30,0]}>
                    <Stack width="100%" justifyContent="center">
                    <Image src={hamarrow}></Image>
                    </Stack>
                </Margin>
            </Stack>
            <Registered></Registered>
        </Stack>

    </Stack>
}
