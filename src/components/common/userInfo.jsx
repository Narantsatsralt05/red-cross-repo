import React from 'react'
import { Tabs } from './tabs'
import profile from '../../assets/icon/profile.svg'
import saindur from '../../assets/icon/saindur.svg'
import people from '../../assets/icon/people.svg'
import help from '../../assets/icon/help.svg'
import { VolunteerWorkInformationTable, CoveredTrainingTable, SkillTable, MembershipInformationTable, HelpInformationTable } from '.'
import UserInfo from '../../pages/user/Info'
import { Stack } from '..'
const PersonalUserInfo = () => {
    const dataH = {
        headers: [
            { text: 'Хувь хүний мэдээлэл', icon: profile },
            { text: 'Сайн дурын ажлын мэдээлэл', icon: saindur },
            { text: 'Гишүүнчлэлийн мэдээлэл', icon: people },
            { text: 'Тусламжийн мэдээлэл', icon: help }
        ],
        body: [
            <div >
                <UserInfo isStep={false} />
            </div>,
            <div style={{ width: '83vw' }}>
                <VolunteerWorkInformationTable admin={true} />
                <CoveredTrainingTable admin={true} />
                <SkillTable admin={true} />
            </div>,
            <div  style={{ width: '83vw' }}>
                <VolunteerWorkInformationTable admin={true} />
            </div>,
            <div  style={{ width: '83vw' }}>
                <HelpInformationTable admin={true} />
            </div>,
        ]
    }

    return (

        <Stack justifyContent='start' >
            <Tabs type='column' data={dataH} />
        </Stack>
    )
}
export default PersonalUserInfo