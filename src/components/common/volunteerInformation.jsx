import React from 'react';

import { Margin, Stack, Text, Border, Padding } from '..';
import line from '../../assets/icon/line.svg';
import plus from '../../assets/icon/plus.svg';
import shape from '../../assets/icon/Shape.svg';
import Styledinput from '../core/input';
import excel from '../../assets/icon/excel.svg';
import { useAuthContext } from '../../common/context/AuthContext';
import { useTheme } from '../../theme/theme';
import { useCollection } from '../../common/services/firebase';
import { TableCell } from '@mui/material';
import { InformationTable } from './informationSections/table';

export const ListOfRegisteredVolunteersTable = ({ admin }) => {
  const { user } = useAuthContext();
  const { color } = useTheme();
  // const data = useCollection('/user').data;
  const data = useCollection('/count').data; //ene bish shuu tur ashiglasan 18r murniihiig ashigana shuu

  const headers = [
    'Регистрийн дугаар',
    'Овог',
    'Нэр',
    'Төрөл',
    'Он сар өдөр',
    'Сайн дурын ажил хийсэн хугацаа',
    'Нэмэлт мэдээлэл',
  ];
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
    return ['УК94092597', 'Даваа', 'Нямсамбуу', 'Гэрийн эргэлт', '2018.05.01', '2 цаг', 'Халамжлуулагч Ц.Батынд'];
  });
  return <InformationTable admin={admin} row={row} body={body} headers={headers} />;
};

export const VolunteerInformation = () => {
  return (
    <Stack bg="#FAFAFA" height="100%" width="100%" direction="column">
      <Margin size={[20, 0, 0, 35]}>
        <Stack width="100%" justifyContent="space-between" alignItems="center">
          <Stack width="24%" justifyContent="space-between" alignItems="center">
            <Text type="T2" style={{ textAlign: 'center' }}>
              Бүртгэлтэй сайн дурын ажлын жагсаалт (5)
            </Text>
            <img src={line.src}/>
            <img src={plus.src}/>
            <Text type="T2">Нэмэх</Text>
          </Stack>
          <Margin size={[0, 80, 0, 0]}>
            <Stack justifyContent="space-evenly" gap="25">
              <img src={shape.src}/>
              <Styledinput width="350px" placeholder="хайх"></Styledinput>
              <img src={excel.src}/>
            </Stack>
          </Margin>
        </Stack>
      </Margin>
      <ListOfRegisteredVolunteersTable />
    </Stack>
  );
};
