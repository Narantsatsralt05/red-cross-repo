import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '../../../theme/theme';
import { useCollection } from '../../../hooks';
import { InformationTable } from './table';
import { Margin, Text } from '../..';

export const SkillTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/skills').data;
  const headers = ['Ур чадвар', 'Ур чадварын түвшин', 'Тайлбар'];
  const title = 'УР ЧАДВАР';
  const tableBodyCell = {
    border: 'none',
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontStyle: 'normal',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
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
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>
            <Text type="T2Caps">{el.skill}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.skillLevel}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.explanation}</Text>
          </TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const CoveredTrainingTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/ coveredTraining').data;
  console.log(data);
  const headers = ['Сургалтын төрөл', 'Хэзээ', 'Хаана', 'Сургалтын хугацаа /цагаар/', 'Нэмэлт мэдээлэл'];
  const title = 'СУРГАЛТ';
  const tableBodyCell = {
    border: 'none',
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontStyle: 'normal',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
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
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>
            <Text type="T2Caps">{el.trainingType}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.when}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.where}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.trainingTime}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.additionalInformation}</Text>
          </TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const MembershipInformationTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/membershipInformation').data;
  console.log(data);
  const headers = ['Гишүүнчлэлийн төрөл', 'Эхэлсэн', 'Дууссан', 'Нэмэлт мэдээлэл'];
  const title = 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ';
  const tableBodyCell = {
    border: 'none',
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontStyle: 'normal',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
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
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>
            <Text type="T2Caps">{el.membershipType}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.startDate}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.endDate}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.additionalInformation}</Text>
          </TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const VolunteerWorkInformationTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/volunteerWorkInformation').data;
  console.log(data);
  const headers = ['Сайн дурын ажил', 'Хугацаа', 'Он сар өдөр', 'Нэмэлт мэдээлэл'];
  const title = 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ';
  const tableBodyCell = {
    border: 'none',
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontStyle: 'normal',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
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
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>
            <Text type="T2Caps">{el.volunteering}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.time}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.date}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.additionalInformation}</Text>
          </TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const HelpInformationTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation').data;
  console.log(data);
  const headers = ['Тусламжийн төрөл', 'Эхэлсэн', 'Дууссан', 'Нэмэлт мэдээлэл'];
  const title = 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ';
  const tableBodyCell = {
    border: 'none',
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontStyle: 'normal',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
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
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>
            <Text type="T2Caps">{el.typeOfAssistance}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.startDate}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.endDate}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.additionalInformation}</Text>
          </TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};

export const EmergencyContactPersonTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/EmergencyContactPerson').data;
  console.log(data);
  const headers = ['Таны юу болох', 'Овог, нэр', 'Утасны дугаар'];
  const title = 'Яаралтай үед холбоо барих гэр бүлийн гишүүний мэдээлэл';
  const tableBodyCell = {
    border: 'none',
    fontStyle: 'normal',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontStyle: 'normal',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
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
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>
            <Text type="T2Caps">{el.information}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.name}</Text>
          </TableCell>
          <TableCell style={tableBodyCell}>
            <Text type="T2">{el.phoneNumber}</Text>
          </TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};