import { Stack , Text ,Margin ,Border ,Button} from "../core"
import exit from '../../assets/icon/Group 5 (1).svg'
import Dropdown from "./dropdown";
import line from '../../assets/icon/upline.svg'
import Styledinput from "../core/input";
import { useState } from "react";
export const Addwork = () => {
    const [hour, setHour] = useState('')
    const a = ["УК124093122","УК01092597","УК20091234","УК90955597"];
    const b = ["Гамшиг","Тусламж","Гэрийн эргэлт"];
    return   <Stack bg="white" width="55vw" height="100vh" justifyContent="space-between" direction="column" alignItems="center"> 
                <Stack  alignItems="center" width="52vw" height="70vh" direction="column" justifyContent="space-evenly">
                    <Stack width="51vw" height="10vh" alignItems="center" justifyContent="space-between"  >
                        <Text type="T2">
                            САЙН ДУРЫН АЖИЛ БҮРТГЭХ
                        </Text>
                        <img src={exit.src}></img>
                    </Stack>
                    <Stack  width="51vw" height="10vh" justifyContent="space-evenly"  direction="column">
                        <Text>
                            Регистрийн дугаар
                        </Text>
                        <Stack width="50vw" height="50px" style={{border:"1px rgba(0, 0, 0, 0.2) solid",borderRadius:"3px"}} alignItems="center">
                            {a.map(el=>{
                                return <Margin size={[0,5,0,5]}>
                                            <Stack width="130px" height="35px" bg="#F2F2F2" justifyContent="space-evenly" alignItems="center" style={{borderRadius:"3px"}}>
                                                <Text type="T2">
                                                    {el}
                                                </Text>
                                                <img src={exit.src}></img>
                                            </Stack>
                                        </Margin>
                                    })}
                        </Stack>
                    </Stack>
                    <Stack width="51vw"  height="10vh"justifyContent="space-evenly" direction="column" >
                        <Text>
                            Сайн дурын ажлын төрөл
                        </Text>
                        <Dropdown width="50vw" height="50px" value="Гэрийн эргэлт" arr={b}>

                        </Dropdown>
                    </Stack>
                    <Stack width="51vw"  height="10vh"justifyContent="space-evenly" direction="column" >
                        <Text>
                            Хугацаа /цагаар/
                        </Text>
                        <Styledinput width="50vw" height="50px" onChange={event => setHour(event.target.value)} >

                        </Styledinput>
                    </Stack>
                    <Stack width="51vw"  height="10vh"justifyContent="space-evenly" direction="column" >
                        <Text>
                            Он сар өдөр
                        </Text>
                        <Styledinput width="50vw" height="50px"  onChange={event => setHour(event.target.value)} >

                        </Styledinput>
                    </Stack>
                    <Stack width="51vw"  height="10vh"justifyContent="space-evenly" direction="column" >
                        <Text>
                            Нэмэлт мэдээлэл
                        </Text>
                        <Styledinput width="50vw" height="120px"  onChange={event => setHour(event.target.value)} >

                        </Styledinput>
                    </Stack>
                </Stack>
                <Margin size={[0,0,20,0]}> 
                    <Stack direction="column" justifyContent="space-between" width="51vw" height="10vh">
                        <img src={line.src}></img>
                        <Stack height="8vh" width="51vw" justifyContent="flex-end" alignItems="center">
                            <Margin size={[0,20,0,0]}>
                                <Button bc="1px grey solid" bgColor="white" width="140px" height="30px" borderRadius="3px">
                                    Хадгалаад шинэ
                                </Button>
                            </Margin>
                            <Margin size={[0,20,0,0]}>
                                <Button bc="1px grey solid" bgColor="#0066B3" color="white" width="120px" height="30px" borderRadius="3px" >
                                    Хадгалах
                                </Button>
                            </Margin>
                        </Stack>
                    </Stack>
                </Margin>
            </Stack>

} 