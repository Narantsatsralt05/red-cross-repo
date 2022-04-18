import React from 'react';
import { InformationTable, Margin } from '../..';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '../../../theme/theme';
import { useCollection } from '../../../hooks';

export const SkillTable = ({ admin }) => {
  const { color } = useTheme();
  const data = useCollection('/user/Y2Aiw9KPlijMFfTHIpsy/skills').data;
  const headers = ['Ур чадвар', 'Ур чадварын түвшин', 'Тайлбар'];
  const title = 'УР ЧАДВАР';
  const tableBodyCell = {
    border: 'none',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '15px',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '20px',
    padding: '10px',
    width: '20vw',
    align: 'left',
  };
  const row = headers.map((el) => {
    return <TableCell style={tableHeadCell}>{el}</TableCell>;
  });
  const body = data.map((el) => {
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>{el.skill}</TableCell>
          <TableCell style={tableBodyCell}>{el.skillLevel}</TableCell>
          <TableCell style={tableBodyCell}>{el.explanation}</TableCell>
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
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '15px',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '20px',
    padding: '10px',
    width: '20vw',
    align: 'left',
  };
  const row = headers.map((el) => {
    return <TableCell style={tableHeadCell}>{el}</TableCell>;
  });
  const body = data.map((el) => {
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>{el.trainingType}</TableCell>
          <TableCell style={tableBodyCell}>{el.when}</TableCell>
          <TableCell style={tableBodyCell}>{el.where}</TableCell>
          <TableCell style={tableBodyCell}>{el.trainingTime}</TableCell>
          <TableCell style={tableBodyCell}>{el.additionalInformation}</TableCell>
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
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '15px',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '20px',
    padding: '10px',
    width: '20vw',
    align: 'left',
  };
  const row = headers.map((el) => {
    return <TableCell style={tableHeadCell}>{el}</TableCell>;
  });
  const body = data.map((el) => {
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>{el.membershipType}</TableCell>
          <TableCell style={tableBodyCell}>{el.startDate}</TableCell>
          <TableCell style={tableBodyCell}>{el.endDate}</TableCell>
          <TableCell style={tableBodyCell}>{el.additionalInformation}</TableCell>
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
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '15px',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '20px',
    padding: '10px',
    width: '20vw',
    align: 'left',
  };
  const row = headers.map((el) => {
    return <TableCell style={tableHeadCell}>{el}</TableCell>;
  });
  const body = data.map((el) => {
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>{el.volunteering}</TableCell>
          <TableCell style={tableBodyCell}>{el.time}</TableCell>
          <TableCell style={tableBodyCell}>{el.date}</TableCell>
          <TableCell style={tableBodyCell}>{el.additionalInformation}</TableCell>
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
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '15px',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '20px',
    padding: '10px',
    width: '20vw',
    align: 'left',
  };
  const row = headers.map((el) => {
    return <TableCell style={tableHeadCell}>{el}</TableCell>;
  });
  const body = data.map((el) => {
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>{el.typeOfAssistance}</TableCell>
          <TableCell style={tableBodyCell}>{el.startDate}</TableCell>
          <TableCell style={tableBodyCell}>{el.endDate}</TableCell>
          <TableCell style={tableBodyCell}>{el.additionalInformation}</TableCell>
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
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '15px',
    padding: '10px',
    width: '20vw',
    align: 'left',
    first: {
      border: 'none',
      fontWeight: '300',
      fontStyle: 'normal',
      fontSize: '15px',
      padding: '10px',
      width: '20vw',
      align: 'left',
      color: color.primary.blue,
    },
  };
  const tableHeadCell = {
    border: 'none',
    color: color.primary.black,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '20px',
    padding: '10px',
    width: '20vw',
    align: 'left',
  };
  const row = headers.map((el) => {
    return <TableCell style={tableHeadCell}>{el}</TableCell>;
  });
  const body = data.map((el) => {
    return (
      <Margin size={[0, 0, 5, 10]}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell style={tableBodyCell.first}>{el.information}</TableCell>
          <TableCell style={tableBodyCell}>{el.name}</TableCell>
          <TableCell style={tableBodyCell}>{el.phoneNumber}</TableCell>
        </TableRow>
      </Margin>
    );
  });
  return <InformationTable admin={admin} title={title} row={row} body={body} />;
};