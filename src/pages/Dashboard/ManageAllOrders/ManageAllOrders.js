import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageAllOrders = () => {
    const [allOrders,setAllOrders]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[]);

    

    return (
        <div>
            <h2 className='text-primary m-2'>Total Orders: {allOrders.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Price</TableCell>
            <TableCell align="right">Action</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((allOrder) => (
            <TableRow
              key={allOrder._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {allOrder.name}
              </TableCell>
              <TableCell align="right">{allOrder.email}</TableCell>
              <TableCell align="right">{allOrder.title}</TableCell>
              <TableCell align="right">{allOrder.price}</TableCell>
              <TableCell align="right">
                  <button className="btn btn-danger">Delete</button>
              </TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default ManageAllOrders;