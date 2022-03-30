import { Status } from './status';
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const data = [
  {id:982, Fname:'НЯМСАМБУУ', Lname:'ДАВАА', rd:'УК94092597',gender:'ЭР',phone:88556699, tag:["сди", "гиш"]},
  {id:981, Fname:'ЦОГ', Lname:'БАТАА', rd:'ФЭ55102678', gender:'ЭМ', phone:88996655, tag:["сди", "тх"]},
  {id:980, Fname:'НАСАНБУЯН', Lname:'ОЮУНААА', rd:'ЯН98120252', gender:'ЭМ', phone:99223366, tag:["гиш"]},
  {id:989, Fname:'САРУУЛТЭНГЭР', Lname:'БОЛДОО', rd:'ЖЗ87121255', gender:'ЭМ', phone:88556633, tag:["сди", "гиш"]},
  {id:988, Fname:'ЯНЖИНДУЛАМ', Lname:'ЦОГТОО', rd:'ЗЦ90021210', gender:'ЭР', phone:88441122, tag:["сди", "гиш"]},
]
const DataTable = () => {
  const rows = data
  
  return (
    <TableContainer style={{ border: '1px solid #EDEDED', borderRadius: '5px', height: '350px', width: '80%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ fontWeight: '300', fontStyle: 'light', fontSize: 'px', width: '250px', marginTop: '9px', marginLeft: '11px', marginBottom: '12px' }} align="left">СҮҮЛД НЭМЭГДСЭН ХҮН</div>
      <Table>
        <TableHead style={{ fontSize: '12px' }}>
          <TableRow>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }}>#</TableCell>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">ОВОГ</TableCell>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">НЭР</TableCell>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">РД</TableCell>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">ХҮЙС</TableCell>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">УТАС</TableCell>
            <TableCell style={{ border: 'none', color: '#A9A9A9', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">СТАТУС</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }}>{row.id}</TableCell>
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">{row.Fname}</TableCell>
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">{row.Lname}</TableCell>
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">{row.rd}</TableCell>
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">{row.gender}</TableCell>
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }} align="left">{row.phone}</TableCell>
              <TableCell style={{ border: 'none', fontWeight: '300', fontStyle: 'light', fontSize: '20px', padding: '10px' }}>
                <div style={{ display: 'flex', gap: '5%', fontWeight: '300', fontStyle: 'light' }}>
                  {row.tag.map((tag, index) => {
                    switch (tag) {
                      case "тх":
                        return <div>
                          <Status role={"green"} />
                        </div>
                        break;
                      case "гиш":
                        return <div>
                          <Status role={"grey"} />
                        </div>
                        break;
                      case "сди":
                        return <div>
                          <Status role={"blue"} />
                        </div>
                        break;
                      default:
                        return <div>
                          no status
                        </div>
                        break;
                    }
                  })}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { DataTable };