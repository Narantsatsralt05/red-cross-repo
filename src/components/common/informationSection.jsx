import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCollection } from '../../hooks';
import { Margin, Text, Stack } from '../../components';

// const HalfInformationSection = ({ first, second, third, fourth, fifth }) => {
//   return (
//   <Margin size={[0, 0, 10, 10]}>
//   <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//     <TableCell
//       style={{
//         border: 'none',
//         color: '#0066B3',
//         fontWeight: '300',
//         fontStyle: 'normal',
//         fontSize: '15px',
//         padding: '10px',
//         width: '20vw',
//       }}
//     >
//       {first}
//     </TableCell>
//     <TableCell
//       style={{
//         border: 'none',
//         fontWeight: '300',
//         fontStyle: 'normal',
//         fontSize: '15px',
//         padding: '10px',
//         width: '20vw',
//       }}
//       align="left"
//     >
//       {second}
//     </TableCell>
//     <TableCell
//       style={{
//         border: 'none',
//         fontWeight: '300',
//         fontStyle: 'normal',
//         fontSize: '15px',
//         padding: '10px',
//         width: '20vw',
//       }}
//       align="left"
//     >
//       {third}
//     </TableCell>
//     <TableCell
//       style={{
//         border: 'none',
//         fontWeight: '300',
//         fontStyle: 'normal',
//         fontSize: '15px',
//         padding: '10px',
//         width: '20vw',
//       }}
//       align="left"
//     >
//       {fourth}
//     </TableCell>
//     <TableCell
//       style={{
//         border: 'none',
//         fontWeight: '300',
//         fontStyle: 'normal',
//         fontSize: '15px',
//         padding: '10px',
//         width: '20vw',
//       }}
//       align="left"
//     >
//       {fifth}
//     </TableCell>
//   </TableRow>
// </Margin>
//   );
// };
const InformationSection = ({ path, admin }) => {
  const { data } = useCollection(path);
  const type = path.split('/').slice(-1)[0];

  return (
    <Margin size={[35, 30, 10, 10]}>
      <Stack justifyContent="flex-start" direction="column">
        <Stack justifyContent="flex-start" direction="row" alignItems="center">
          <Margin size={[20, 10, 20, 5]}>
            <Text color="#000000" fontSize="20px">
              {type === 'sainDur'
                ? 'САЙН ДУРЫН АЖЛЫН МЭДЭЭЛЭЛ'
                : type === 'surgalt'
                ? 'СУРГАЛТ'
                : type === 'urChadvar'
                ? 'УР ЧАДВАР'
                : type === 'memberType'
                ? 'ГИШҮҮНЧЛЭЛИЙН МЭДЭЭЛЭЛ'
                : type === 'helpType'
                ? 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ'
                : type === 'helpInformation'
                ? 'ТУСЛАМЖИЙН МЭДЭЭЛЭЛ'
                : ''}
            </Text>
          </Margin>
          {admin === true ? (
            <>
              <Margin size={[0, 20, 0, 20]}>
                <Stack width="1px" height="40px" bg="#7A7A7A" />
              </Margin>
              <Margin size={[0, 0, 10, 0]}>
                <Text color="#818181" fontSize="50px">
                  +
                </Text>
              </Margin>
              <Margin size={[0, 0, 0, 20]}>
                <Text color="#000000" fontSize="22px">
                  Нэмэх
                </Text>
              </Margin>
            </>
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
      <TableContainer
        style={{
          border: '1px solid #EDEDED',
          borderRadius: '5px',
          width: '95%',
          width: '95vw',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Table>
          <Margin size={[10, 0, 5, 10]}>
            <TableHead style={{ fontSize: '12px' }}>
              <TableRow>
                <TableCell
                  style={{
                    border: 'none',
                    color: '#000000',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    padding: '10px',
                    width: '20vw',
                  }}
                  align="left"
                >
                  {type === 'sainDur'
                    ? 'Сайн дурын ажил'
                    : type === 'surgalt'
                    ? 'Сургалтын төрөл'
                    : type === 'urChadvar'
                    ? 'Ур чадвар'
                    : type === 'memberType'
                    ? 'Гишүүнчлэлийн төрөл'
                    : type === 'helpType'
                    ? 'Тусламжийн төрөл'
                    : type === 'helpInformation'
                    ? 'Тусламжийн төрөл'
                    : ''}
                </TableCell>
                <TableCell
                  style={{
                    border: 'none',
                    color: '#000000',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    padding: '10px',
                    width: '20vw',
                  }}
                  align="left"
                >
                  {type === 'sainDur'
                    ? 'Хугацаа'
                    : type === 'surgalt'
                    ? 'Хэзээ'
                    : type === 'urChadvar'
                    ? 'Ур чадварын түвшин'
                    : type === 'memberType'
                    ? 'Эхэлсэн'
                    : type === 'helpType'
                    ? 'Эхэлсэн'
                    : type === 'helpInformation'
                    ? 'Төслийн нэр'
                    : ''}
                </TableCell>
                <TableCell
                  style={{
                    border: 'none',
                    color: '#000000',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    padding: '10px',
                    width: '20vw',
                  }}
                  align="left"
                >
                  {type === 'sainDur'
                    ? 'Он сар өдөр'
                    : type === 'surgalt'
                    ? 'Хаана'
                    : type === 'urChadvar'
                    ? 'Тайлбар'
                    : type === 'memberType'
                    ? 'Дууссан'
                    : type === 'helpType'
                    ? 'Дууссан'
                    : type === 'helpInformation'
                    ? 'Он/сар/өдөр'
                    : ''}
                </TableCell>
                <TableCell
                  style={{
                    border: 'none',
                    color: '#000000',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    padding: '10px',
                    width: '20vw',
                  }}
                  align="left"
                >
                  {type === 'sainDur'
                    ? 'Нэмэлт мэдээлэл'
                    : type === 'surgalt'
                    ? 'Сургалтын хугацаа /цагаар/'
                    : type === 'urChadvar'
                    ? ''
                    : type === 'memberType'
                    ? 'Нэмэлт мэдээлэл'
                    : type === 'helpType'
                    ? 'Нэмэлт мэдээлэл'
                    : type === 'helpInformation'
                    ? 'Нэмэлт мэдээлэл'
                    : ''}
                </TableCell>
                <TableCell
                  style={{
                    border: 'none',
                    color: '#000000',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontSize: '20px',
                    padding: '10px',
                    width: '20vw',
                  }}
                  align="left"
                >
                  {type === 'sainDur'
                    ? ''
                    : type === 'surgalt'
                    ? 'Нэмэлт мэдээлэл'
                    : type === 'urChadvar'
                    ? ''
                    : type === 'memberType'
                    ? ''
                    : type === 'helpType'
                    ? ''
                    : type === 'helpInformation'
                    ? ''
                    : ''}
                </TableCell>
              </TableRow>
            </TableHead>
          </Margin>
          <Stack width="100%" height="1px" bg=" #E5E5E5" />
          <TableBody>
            {data.map((el, index) => (
              <Margin size={[0, 0, 10, 10]}>
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    style={{
                      border: 'none',
                      color: '#0066B3',
                      fontWeight: '300',
                      fontStyle: 'normal',
                      fontSize: '15px',
                      padding: '10px',
                      width: '20vw',
                    }}
                  >
                    {el.first}
                  </TableCell>
                  <TableCell
                    style={{
                      border: 'none',
                      fontWeight: '300',
                      fontStyle: 'normal',
                      fontSize: '15px',
                      padding: '10px',
                      width: '20vw',
                    }}
                    align="left"
                  >
                    {el.second}
                  </TableCell>
                  <TableCell
                    style={{
                      border: 'none',
                      fontWeight: '300',
                      fontStyle: 'normal',
                      fontSize: '15px',
                      padding: '10px',
                      width: '20vw',
                    }}
                    align="left"
                  >
                    {el.third}
                  </TableCell>
                  <TableCell
                    style={{
                      border: 'none',
                      fontWeight: '300',
                      fontStyle: 'normal',
                      fontSize: '15px',
                      padding: '10px',
                      width: '20vw',
                    }}
                    align="left"
                  >
                    {el.fourth}
                  </TableCell>
                  <TableCell
                    style={{
                      border: 'none',
                      fontWeight: '300',
                      fontStyle: 'normal',
                      fontSize: '15px',
                      padding: '10px',
                      width: '20vw',
                    }}
                    align="left"
                  >
                    {el.fifth}
                  </TableCell>
                </TableRow>
              </Margin>
              // <HalfInformationSection
              //   first={el.first}
              //   second={el.second}
              //   key={index}
              //   third={el.third}
              //   fourth={el.fourth}
              //   fifth={el.fifth}
              // />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Margin>
  );
};

export { InformationSection };

{
  /* <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/helpType" admin={true} />
      <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/memberType" admin={true} />
      <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/urChadvar" admin={true} />
      <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/sainDur" admin={true} />
      <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/surgalt" admin={true} />
      <InformationSection path="/user/Y2Aiw9KPlijMFfTHIpsy/helpInformation" admin={false} /> */
}
// //ingej ashiglana
