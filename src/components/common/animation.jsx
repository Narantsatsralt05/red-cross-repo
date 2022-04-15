import { keyframes } from 'styled-components';
import styled from 'styled-components';
import MaterialTable from 'material-table';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const rows = [
  {
    firstname: 'Mohammad',
    lastfirstname: 'Faisal',
    id: '1',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'aabbabab Raihan ',
    lastfirstname: 'bat',
    id: '2',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'cagagagag Raihan ',
    lastfirstname: 'bold',
    id: '3',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'rrer ',
    lastfirstname: 'nasX',
    id: '6',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'sdfsdfRaihan ',
    lastfirstname: 'elom',
    id: '43',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'qqqq ',
    lastfirstname: 'gaga',
    id: '53',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'wwww Raihan ',
    lastfirstname: 'rere',
    id: '76',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'eeee Raihan ',
    lastfirstname: 'yyty',
    id: '98',
    register: 'UO04286969',
    gender: 'female',
    phone: '90119911',
    status: 'member',
  },
  {
    firstname: 'rrrrRaihan ',
    lastfirstname: 'gifgi',
    id: '99',
    register: 'UO04286969',
    gender: 'female',
    phone: '99999999 ',
    status: 'member',
  },
  {
    firstname: 'ttttRaihan ',
    lastfirstname: 'dfgdfg',
    id: '45',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'NhhhhRaihan ',
    lastfirstname: 'Shudfgdfgvo',
    id: '32',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
  {
    firstname: 'nnnn Raihan ',
    lastfirstname: 'dfgdfg',
    id: '999',
    register: 'UO04286969',
    gender: 'male',
    phone: '88119911',
    status: 'member',
  },
];

const columns = [
  { headerName: '#', field: 'id', width: 100 },
  { headerName: 'Firstname', field: 'firstname', width: 150 },
  { headerName: 'Lastname', field: 'lastfirstname', width: 150 },
  { headerName: 'Register', field: 'register', width: 150 },
  { headerName: 'Gender', field: 'gender', width: 150 },
  { headerName: 'Phone Number', field: 'phone', width: 160 },
  { headerName: 'Status', field: 'status', width: 120 },
];

export const BasicTable = () => {
  return (
    <div className="table">
      Suuld nemgedsen
      <DataGrid GridLinesVisibility="None" sx={{borderBottomWidth: 0, gap: 0}} className= 'lastcolumnSeparator' columns={columns} rows={rows} pageSize={10} rowsPerPageOptions={[5]} checkboxSelection  GridLinesVisibility={false} />
    </div>
  );
};
export const leftanimation = keyframes`
 from{
     right: -100vh;
 }
 to{
     right: 0;
 }
`;
export const rightanimation = keyframes`
 from{
     right: 0;
 }
 to{
     right: -100%;
 }
`;
export const Demodiv = styled.div`
  width: 500px;
  height: 100vh;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  gap: 40px;
  align-items: center;
  box-shadow: -22px -1px 41px -6px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: -22px -1px 41px -6px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: -22px -1px 41px -6px rgba(0, 0, 0, 0.53);
  animation-name: ${(props) => props.animation};
  animation-duration: 0.8s;
  animation-timing-function: linear step-end;
  animation-fill-mode: forwards;
`;
export default Demodiv;
