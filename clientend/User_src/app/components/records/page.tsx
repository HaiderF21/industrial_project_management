"use client"
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { redirect, useRouter } from "next/navigation";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

function createData(

  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
// const router=useRouter();
export default function BasicTable() {
  // const rt=async (e: { preventDefault: () => void })=>{
  //   e.preventDefault();
  //   const {isAuthenticated} =getKindeServerSession();
  //   if(!(isAuthenticated)){
  //     redirect("/")
  //   }

  // }
  // rt;
  const [rows,setrow]=useState([{
  password:"pass",
  Email:"email",
  Username:"username"
  }])
  const api = "http://localhost:3002";
  
  const update=async()=>{
    try{
  
        await fetch(api+'/Data')
        .then(res => res.json())
        .then(data => setrow(data))
        .catch(err => console.log(err));
    }catch(e){
        alert("error")
    }}
    update();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">User Name&nbsp;(g)</TableCell>
            <TableCell align="right">Password&nbsp;(g)</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Email}
              </TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Username}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
