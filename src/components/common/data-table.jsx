import { Status } from './status';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCollection } from '../../common/services/firebase'

const DataTable = () => {
  const Users = useCollection('/user', true).data;
  const tableCellStyle = {
    border: 'none',
    fontWeight: '300',
    fontStyle: 'light',
    fontSize: '20px',
    padding: '10px',
    align: 'left',
    head: {
      color: '#A9A9A9',
      border: 'none',
      fontWeight: '300',
      fontStyle: 'light',
      fontSize: '20px',
      padding: '10px',
      align: 'left',
    },
  };
  return (
    <TableContainer
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EDEDED',
        borderRadius: '5px',
        height: '350px',
        width: '83vw',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontWeight: '300',
          fontStyle: 'light',
          fontSize: 'px',
          width: '250px',
          marginTop: '9px',
          marginLeft: '11px',
          marginBottom: '12px',
        }}
        align="left"
      >
        СҮҮЛД НЭМЭГДСЭН ХҮН
      </div>
      <Table>
        <TableHead style={{ fontSize: '12px' }}>
          <TableRow>
            <TableCell style={tableCellStyle.head}>#</TableCell>
            <TableCell style={tableCellStyle.head} align="left">
              ОВОГ
            </TableCell>
            <TableCell style={tableCellStyle.head} align="left">
              НЭР
            </TableCell>
            <TableCell style={tableCellStyle.head} align="left">
              РД
            </TableCell>
            <TableCell style={tableCellStyle.head} align="left">
              ХҮЙС
            </TableCell>
            <TableCell style={tableCellStyle.head} align="left">
              УТАС
            </TableCell>
            <TableCell style={tableCellStyle.head} align="left">
              СТАТУС
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Users.map((el) => {
            if (el.admin === false) {
              return (
                <TableRow key={el.phoneNumber} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell style={tableCellStyle}>{el.id}</TableCell>
                  <TableCell style={tableCellStyle}>{el.lastName}</TableCell>
                  <TableCell style={tableCellStyle}>{el.firstName}</TableCell>
                  <TableCell style={tableCellStyle}>{el.RD}</TableCell>
                  <TableCell style={tableCellStyle}>{el.gender}</TableCell>
                  <TableCell style={tableCellStyle}>{el.phoneNumber}</TableCell>
                  <TableCell style={tableCellStyle}>
                    <div style={{ display: 'flex', gap: '5%', fontWeight: '300', fontStyle: 'light' }}>
                      {el.status.beneficiary === true && <Status role={'green'} />}
                      {el.status.member === true && <Status role={'grey'} />}
                      {el.status.volunteer === true && <Status role={'blue'} />}
                    </div>
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { DataTable };