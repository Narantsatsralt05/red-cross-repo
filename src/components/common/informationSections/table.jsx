import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '../../../theme/theme';
import { Margin, Text, Stack } from '../..';
import styled from 'styled-components';
import { Add } from 'material-ui-icons';

export const InformationTable = ({ admin, title, row, body }) => {
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
              <Text color={color.primary.blue} fontSize="50px">
                +
              </Text>
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
                <Text color={color.primary.blue} fontSize="50px">
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
            <TableBody>{body}</TableBody>
          </Table>
        </TableContainer>
      </Margin>
    </Stack>
  );
};

//<SkillTable admin={true} />
{/* <SkillTable admin={false} /> */}