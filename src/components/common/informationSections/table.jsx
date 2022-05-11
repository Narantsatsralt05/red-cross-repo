import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '../../../theme/theme';
import { Margin, Text, Stack } from '../..';
import TableCell from '@mui/material/TableCell';
import styled from 'styled-components';
import { Add, Details } from 'material-ui-icons';
import RightBarCheck from '../rightBarCheck';
import { useCollection } from '../../../hooks';

export const InformationTable = ({ admin, title, row, body, data, headers }) => {
  const [checkBar, setCheckBar] = React.useState(false)
  const [bar, setBar] = React.useState(false)
  const [number, setNumber] = React.useState()
  const { color } = useTheme();
  const tableContainerStyle = {
    border: `1px solid ${color.secondary.white}`,
    borderRadius: '5px',
    display: 'flex',
    overflow: 'scroll',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  };
  const AddSectionOnPc = () => {
    return (
      <Stack justifyContent="flex-start" direction="row" alignItems="center">
        <Margin size={[20, 10, 20, 5]}>
          <Text color={color.primary.black} fontSize="20px">
            {title}
          </Text>
        </Margin>
        {admin && (
          <>
            <Margin size={[0, 20, 0, 20]}>
              <Stack width="1px" height="40px" bg={color.secondary.black} />
            </Margin>
            <Margin size={[0, 0, 10, 0]}>
              <Text color={color.primary.blue} fontSize="50px" onClick={() => setBar(true)} style={{ cursor: 'pointer' }} >
                +
              </Text>
              {bar ? <RightBarCheck bar={bar} setBar={setBar} headers={headers} title={title}  checkBar={checkBar} setCheckBar={setCheckBar}/> : ''}
            </Margin>
            <Margin size={[0, 0, 0, 20]}>
              <Text color={color.primary.black} fontSize="22px">
                Нэмэх
              </Text>
            </Margin>
          </>
        )}
      </Stack>
    );
  };
  const AddSectionOnMobile = () => {
    return (
      <Stack width="100%" justifyContent="flex-start" direction="column">
        <Margin size={[20, 10, admin ? 0 : 20, 5]}>
          <Text color={color.primary.black} fontSize="20px">
            {title}
          </Text>
        </Margin>
        {admin && (
          <>
            <Stack justifyContent="flex-start" direction="row" alignItems="center">
              <Margin size={[0, 0, 10, 0]}>
                <Text color={color.primary.blue} fontSize="50px" >
                  +
                </Text>
              </Margin>
              <Margin size={[0, 0, 0, 20]}>
                <Text color={color.primary.black} fontSize="22px">
                  Нэмэх
                </Text>
              </Margin>
            </Stack>
          </>
        )}
      </Stack>
    );
  };
  const OnMobile = styled.div`
    @media (min-width: 600px) {
      display: none;
    }
  `;
  const OnPc = styled.div`
    @media (max-width: 600px) {
      display: none;
    }
  `;
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

  const Hover = styled.text`
    &:hover {
      color: ${color.secondary.blue};
    }
    &:active {
      color: ${color.disabled.blue};
    }
  `;
  const [elData, setEl] = React.useState()
  const Details = ({el, ind}) => {
    setNumber(ind)
    setCheckBar(true)
    setEl(el)
  };
  return (
    <Stack>
      <Margin size={[35, 30, 10, 10]}>
        <OnPc>
          <AddSectionOnPc />
        </OnPc>
        <OnMobile>
          <AddSectionOnMobile />
        </OnMobile>
        <TableContainer style={tableContainerStyle}>
          <Table>
            <Margin size={[5, 0, 5, 10]}>
              <TableHead style={{ fontSize: '12px' }}>
                <TableRow>{row}</TableRow>
              </TableHead>
            </Margin>
            <Stack width="100%" height="1px" bg={color.secondary.white} />
            <TableBody>
              {body.map((el, ind) => {
                return (
                  <Margin size={[0, 0, 5, 10]} >
                    {checkBar ? <RightBarCheck headers={headers} checkBar={checkBar} setCheckBar={setCheckBar} el={elData} ind={number}title={title} bar={bar} setBar={setBar} /> : ''}
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => Details({el, ind})}>
                      {el.map((element, index) => {
                        return (
                          <TableCell style={index === 0 ? tableBodyCell.first : tableBodyCell} >
                            <Text type={index === 0 ? 'T2Caps' : 'T2'}>
                              {index === 0 ? <Hover>{element}</Hover> : element}
                            </Text>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </Margin>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Margin>


    </Stack >
  );
};

//<SkillTable admin={true} />
{/* <SkillTable admin={false} /> */ }
