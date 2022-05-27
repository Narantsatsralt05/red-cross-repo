import React from 'react';
import TableCell from '@mui/material/TableCell';
import { useTheme } from '../../../theme/theme';
import { useCollection, useDocument } from '../../../common/services/firebase';
import { InformationTable } from './table';
import { Text } from '../..';
import { useAuthContext } from '../../../common/context/AuthContext';

export const SkillTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  const data = useCollection(`/user/${user?.uid}/skills`).data;
  const headers = ['Ур чадвар', 'Ур чадварын түвшин', 'Тайлбар'];
  const title = 'УР ЧАДВАР';

  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '300px',
    align: 'left',
  };
  const row = headers.map((el) => {
    return (
      <TableCell style={tableHeadCell}>
        <Text type="T1">{el}</Text>
      </TableCell>
    );
  });
  const body = data.map((el) => {
    return [el.skill, el.skillLevel, el.explanation];
  });

  return <InformationTable admin={admin} title={title} row={row} body={body} data={data} headers={headers} />;
};

export const CoveredTrainingTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  const data = useCollection(`/user/${user?.uid}/ coveredTraining`).data;
  const headers = ['Сургалтын төрөл', 'Хэзээ', 'Хаана', 'Сургалтын хугацаа /цагаар/', 'Нэмэлт мэдээлэл'];
  const title = 'СУРГАЛТ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '300px',
    align: 'left',
  };
  const row = headers.map((el) => {
    return (
      <TableCell style={tableHeadCell}>
        <Text type="T1">{el}</Text>
      </TableCell>
    );
  });
  const body = data.map((el) => {
    return [el.trainingType, el.when, el.where, el.trainingTime, el.additionalInformation];
  });

  return <InformationTable admin={admin} title={title} row={row} body={body} headers={headers} />;
};

export const MembershipInformationTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  const data = useCollection(`/user/${user?.uid}/membershipInformation`).data;
  const headers = ['Гишүүнчлэлийн төрөл', 'Эхэлсэн', 'Дууссан', 'Нэмэлт мэдээлэл'];
  const title = 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '300px',
    align: 'left',
  };
  const row = headers.map((el) => {
    return (
      <TableCell style={tableHeadCell}>
        <Text type="T1">{el}</Text>
      </TableCell>
    );
  });
  const body = data.map((el) => {
    return [el.membershipType, el.startDate, el.endDate, el.additionalInformation];
  });

  return <InformationTable admin={admin} title={title} row={row} body={body} headers={headers} data={data} />;
};

export const VolunteerWorkInformationTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  const data = useCollection(`/user/${user?.uid}/volunteerWorkInformation`).data;
  const headers = ['Сайн дурын ажил', 'Хугацаа', 'Он сар өдөр', 'Нэмэлт мэдээлэл'];
  const title = 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '300px',
    align: 'left',
  };
  const row = headers.map((el) => {
    return (
      <TableCell style={tableHeadCell}>
        <Text type="T1">{el}</Text>
      </TableCell>
    );
  });
  const body = data.map((el) => {
    return [el.volunteering, el.time, el.date, el.additionalInformation];
  });

  return <InformationTable admin={admin} title={title} row={row} body={body} data={data} headers={headers} />;
};

export const HelpInformationTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  const data = useCollection(`/user/${user?.uid}/helpInformation`).data;
  const headers = ['Тусламжийн төрөл', 'Эхэлсэн', 'Дууссан', 'Нэмэлт мэдээлэл'];
  const title = 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '300px',
    align: 'left',
  };
  const row = headers.map((el) => {
    return (
      <TableCell style={tableHeadCell}>
        <Text type="T1">{el}</Text>
      </TableCell>
    );
  });
  const body = data.map((el) => {
    return [el.typeOfAssistance, el.startDate, el.endDate, el.additionalInformation];
  });

  return <InformationTable admin={admin} title={title} row={row} body={body} headers={headers} />;
};

export const EmergencyContactPersonTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  const data = useCollection(`/user/${user?.uid}/EmergencyContactPerson`).data;
  const headers = ['Таны юу болох', 'Овог, нэр', 'Утасны дугаар'];
  const title = 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '300px',
    align: 'left',
  };
  const row = headers.map((el) => {
    return (
      <TableCell style={tableHeadCell}>
        <Text type="T1">{el}</Text>
      </TableCell>
    );
  });
  const body = data.map((el) => {
    return [el.information, el.name, el.phoneNumber];
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} headers={headers} style={{width:'100%'}} />;
};
