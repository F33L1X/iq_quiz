import * as React from 'react';
import image7 from "../imgs/ScoreBoard.jpg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Eigene Wertung:', 159, 6.0, 24, 4.0),
  createData('Erster Platz:', 237, 9.0, 37, 4.3),
  createData('Zweiter Platz:', 262, 16.0, 24, 6.0),
  createData('Dritter Platz:', 305, 3.7, 67, 4.3),
  createData('Vierter Platz:', 356, 16.0, 49, 3.9),
];

export default function scoreBoard() {
  return (
    <TableContainer component={Paper} style={{maxWidth:"650px", boxShadow: "2px 4px 8px 1px"}}>
      <Table size="small" aria-label="a dense table" style={{backgroundImage:`url(${image7})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{ fontSize:"14px", color:"#ccf0bb", textShadow: "1px 1px black"}}  align="right">Richtige [%]</TableCell>
            <TableCell style={{ fontSize:"14px", color:"#ccf0bb", textShadow: "1px 1px black"}} align="right">Beste Kategorie</TableCell>
            <TableCell style={{ fontSize:"14px", color:"#ccf0bb", textShadow: "1px 1px black"}} align="right">Schlechteste Kategorie</TableCell>
            <TableCell style={{ fontSize:"14px", color:"#ccf0bb", textShadow: "1px 1px black"}} align="right">IQ-Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ fontSize:"14px", color:"#b5e6e8", textShadow: "1px 1px black"}}>
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize:"14px", color:"white", textShadow: "1px 1px black"}} align="right">{row.calories}</TableCell>
              <TableCell style={{ fontSize:"14px", color:"white", textShadow: "1px 1px black"}} align="right">{row.fat}</TableCell>
              <TableCell style={{ fontSize:"14px", color:"white", textShadow: "1px 1px black"}} align="right">{row.carbs}</TableCell>
              <TableCell style={{ fontSize:"14px", color:"white", textShadow: "1px 1px black"}} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


 
