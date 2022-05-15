import React from "react";;
import { Button, Margin, Padding, Stack, Text } from "../components"
import Styledinput from "../components/core/input";
import styled from 'styled-components';
import icon from '../assets/icon/checkboxIcon.svg';

const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
    cursor: pointer;
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items:center;
    &:after {
        position: relative;
        display: block;
        width: 30px;
        height: 30px;
	border: none;
        border: 2px solid grey;
        content: "";
        background-color: white;
    }
    &:checked:after {
        height: 33px;
        width: 33px;
        border: none;
        background-size: contain;
        background-image: url('${icon.src}');
    }
`

const CheckLabel = styled.div`
    display: flex;
    width: 380px;
    // border: 1px solid black;
    display: flex;
    align-items: ${props => props.Alcenter ? 'center' : 'none'};
    gap: 20px;
    width: ${width => width};
    height: ${height => height};
    flex-direction: ${direction => direction};
    position: ${position => position};
`

export const UserInfo2 = () => {
    return (
        <Stack direction='column' style={{ height: 'fit-content', width: '100vw', backgroundColor: 'rgb(245, 247, 249)', paddingLeft: '30px' }}>
            <Stack style={{ marginBottom: '30px', marginTop: '30px' }} direction='row'><Text type="H4">2. САЙН ДУРЫН АЖЛЫН ТУРШЛАГА</Text></Stack>
            <Styledinput size={'16px'} label={<Stack directoin='row'><Text style={{ marginBottom: '10px' }} type="T2">Жил</Text><Text color="red">*</Text></Stack>} height={'40px'} width={'400px'} />
            <Text style={{ marginTop: '30px' }} type="T2">Сонголт (Олон сонголт сонгох боломжтой)<Text color="red">*</Text></Text>
            <Margin size={[30, 0, 50, 0]}>
                <Stack direction='column' gap="20px" style={{flexWrap: 'wrap'}}>
                    <Stack style={{ width: '100%', flexWrap: 'wrap' }} direction='row' gap="20px" justifyContent={'space-between'}>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Гамшгийн менежментийн чиглэлээр</Text></CheckLabel>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Анхны тусламж</Text></CheckLabel>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Ус, орчны эрүүл ахуй</Text></CheckLabel>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Цусны донор</Text></CheckLabel>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Халдварт болон халдварт бус өвчин</Text></CheckLabel>
                    </Stack>
                    <Stack style={{ width: '100%', flexWrap: 'wrap' }} direction='row' gap="20px" justifyContent={'space-between'}>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Халамжийн үйлчилгээ (Гэрийн эргэлт)</Text></CheckLabel>
                        <CheckLabel Alcenter><StyledCheckBox /><Text type="T2">Нийгэм сэтгэлзүйн дэмжлэг</Text></CheckLabel>
                        <CheckLabel Alcenter><StyledCheckBox /><Text style={{display: 'flex', position: 'absolute', marginLeft: '60px'}} type="T2">Хүүхэд, залуучуудын хөдөлгөөний чиглэлээр</Text></CheckLabel>
                        <CheckLabel></CheckLabel>
                        <CheckLabel></CheckLabel>
                    </Stack>
                </Stack>
            </Margin>
            <Button width='fit-content' bgColor="#0066B3" color="white" borderRadius='3px'><Padding size={[10, 25, 10, 25]}><b>Дараагийн алхам</b></Padding></Button>
        </Stack>
    )
}