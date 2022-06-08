import { Button, Margin, Padding, Stack, Text } from "../../components"
import Styledinput from "../../components/core/input";
import styled from 'styled-components';
import icon from '../../assets/icon/checkboxIcon.svg';

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
const UserInfo2 = () => {
    return (
        <Stack direction='column' style={{ height: 'fit-content', width: '100vw', backgroundColor: 'rgb(245, 247, 249)', paddingLeft: '30px' }}>
            <Stack style={{ marginBottom: '30px', marginTop: '30px' }} direction='row'><Text type="H4">2. САЙН ДУРЫН АЖЛЫН ТУРШЛАГА</Text></Stack>
            <Styledinput size={'16px'} label={<Stack directoin='row'><Text style={{ marginBottom: '10px' }} type="T2">Жил</Text><Text color="red">*</Text></Stack>} height={'40px'} width={'400px'} />
            <Text style={{ marginTop: '30px' }} type="T2">Сонголт (Олон сонголт сонгох боломжтой)<Text color="red">*</Text></Text>
            <Margin size={[30, 0, 60, 0]}>
                {/* style={{ width: 'fit-content', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} */}
                <Stack direction='row' gap={'50'} width='100vw' justifyContent='space-between' flexWrap="wrap">
                    <Stack style={{ width: 'fit-content' }} direction='column' gap="50" >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><StyledCheckBox /><Text type="T2"> Гамшгийн менежментийн чиглэлээр</Text></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><StyledCheckBox /><Text type="T2"> Халамжийн үйлчилгээ (Гэрийн эргэлт)</Text></div>
                    </Stack>
                    <Stack style={{ width: 'fit-content' }} direction='column' gap="50">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><StyledCheckBox /><Text type="T2"> Анхны тусламж</Text></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><StyledCheckBox /><Text type="T2"> Нийгэм сэтгэлзүйн дэмжлэг</Text></div>
                    </Stack>
                    <Stack style={{ width: 'fit-content' }} direction='column' gap="50">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><StyledCheckBox /><Text type="T2"> Ус, орчны эрүүл ахуй</Text></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><StyledCheckBox /><Text type="T2"> Хүүхэд, залуучуудын хөдөлгөөний чиглэлээр</Text></div>
                    </Stack>
                    <Stack style={{ width: 'fit-content' }} direction='column' gap="50">
                        <div style={{ width: 'fit-content', height: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}><StyledCheckBox /><Text style={{ marginLeft: '10px' }} type="T2"> Цусны донор</Text></div>
                        <div style={{ width: 'fit-content', height: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}><StyledCheckBox /><Text style={{ marginLeft: '10px' }} type="T2"> Халдварт болон халдварт бус өвчин</Text></div>
                    </Stack>
                </Stack>
            </Margin>
        </Stack>
    )
}

export default UserInfo2;