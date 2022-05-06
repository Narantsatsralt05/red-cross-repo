import React from 'react';
import TableCell from '@mui/material/TableCell';
import { useTheme } from '../../../theme/theme';
import { useCollection } from '../../../hooks';
import { InformationTable } from './table';
import { Text } from '../..';

export const SkillTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/skills').data;
  const headers = ['Ур чадвар', 'Ур чадварын түвшин', 'Тайлбар'];
  const title = 'УР ЧАДВАР';

  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
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
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const CoveredTrainingTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/ coveredTraining').data;
  const headers = ['Сургалтын төрөл', 'Хэзээ', 'Хаана', 'Сургалтын хугацаа /цагаар/', 'Нэмэлт мэдээлэл'];
  const title = 'СУРГАЛТ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
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
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const MembershipInformationTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation').data;
  const headers = ['Гишүүнчлэлийн төрөл', 'Эхэлсэн', 'Дууссан', 'Нэмэлт мэдээлэл'];
  const title = 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
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
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const VolunteerWorkInformationTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation').data;
  const headers = ['Сайн дурын ажил', 'Хугацаа', 'Он сар өдөр', 'Нэмэлт мэдээлэл'];
  const title = 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
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
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const HelpInformationTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation').data;
  const headers = ['Тусламжийн төрөл', 'Эхэлсэн', 'Дууссан', 'Нэмэлт мэдээлэл'];
  const title = 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
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
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const EmergencyContactPersonTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson').data;
  const headers = ['Таны юу болох', 'Овог, нэр', 'Утасны дугаар'];
  const title = 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл';
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
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
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};
