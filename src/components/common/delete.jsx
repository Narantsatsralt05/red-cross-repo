import React from 'react'
import { Button, Stack, Margin, Text } from '..'
import { deleteDocument } from '../../common/services/firebase'

const Delete = ({ DataVolunteer, DataSkill, DataTrain, DataMember, DataHelp, DataEmergency, title, setBar }) => {

    const DeleteDoc = () => {
        if (title === 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ') { deleteDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation/${DataVolunteer}`), setBar(false) }
        if (title === `УР ЧАДВАР`) { deleteDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/skills/${DataSkill}`), setBar(false) }
        if (title === `СУРГАЛТ`) { deleteDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/ coveredTraining/${DataTrain}`), setBar(false) }
        if (title === `ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ`) { deleteDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation/${DataMember}`), setBar(false) }
        if (title === `ТУСЛАМЖИЙН МЭДЭЭЛЭЛ`) { deleteDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation/${DataHelp}`), setBar(false) }
        if (title === `Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл`) { deleteDocument(`/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson/${DataEmergency}`), setBar(false) }
    }
    return (<>
        <Text fontSize='12px' fontFamily='Roboto' lineHeight='12px' fontWeight='300'>
            <Stack width='172px' height='66px' bg='white' direction='column' style={{ boxShadow: '5px 10px 8px  #888888' }}>
                <Margin size={[8, 0, 0, 13]}>

                    Устгах уу?
                </Margin>
                <Margin size={[8, 0, 0, 0]}>
                    <Stack direction='row' justifyContent='space-around'>
                        <Button width='60px' height='23px' borderRadius='2px' bgColor='#33000000' bc='0.5px solid black'>Үгүй</Button>
                        <Button width='60px' height='23px' borderRadius='2px' bgColor='#0066B3' color='white' onClick={DeleteDoc}>Тийм</Button>
                    </Stack>
                </Margin>
            </Stack>
            <div className="" style={{
                width: 0, height: 0, borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderTop: '35px solid white', marginLeft: '90px'
            }} ></div>
        </Text>
    </>

    )
}

export default Delete