import React from 'react'
import { Tabs } from './tabs'
import profile from '../../assets/icon/profile.svg'
import saindur from '../../assets/icon/saindur.svg'
import people from '../../assets/icon/people.svg'
import help from '../../assets/icon/help.svg'
import { VolunteerWorkInformationTable, CoveredTrainingTable, SkillTable, MembershipInformationTable, HelpInformationTable } from '.'
import UserInfo from '../../pages/user/Info'
const PersonalUserInfo = () => {
    const dataH = {
        headers: [
            { text: 'Хувь хүний мэдээлэл', icon: profile },
            { text: 'Сайн дурын ажлын мэдээлэл', icon: saindur },
            { text: 'Гишүүнчлэлийн мэдээлэл', icon: people },
            { text: 'Тусламжийн мэдээлэл', icon: help }
        ],
        body: [
            <div style={{width:''}}>
                <UserInfo isStep={false}  />
            </div>,
            <div>
                <VolunteerWorkInformationTable  admin={true}/>
                <CoveredTrainingTable admin={true} />
                <SkillTable admin={true} />
            </div>,
            <div>
                <MembershipInformationTable admin={true}/>
            </div>,
            <div>
                <HelpInformationTable  admin={true}/>
            </div>,
        ]
    }
    const data = {
        headers: [
            { text: 'Нүүр' },
            { text: 'Үндсэн мэдээлэл' }
        ],
        body: [
            <div>nuur</div>,
            <Tabs type={'column'} data={dataH} />
        ]
    }
    return (

        <div >
            <Tabs type='row' data={data} />
        </div>
    )
}
export default PersonalUserInfo