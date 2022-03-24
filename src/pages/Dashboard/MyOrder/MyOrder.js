import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const MyOrder =()=>{
    const {user}=  useAuth();
    const [ myOrders,setMyOrders]= useState([]);

    const [product,setProduct]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[])


    useEffect(()=>{
        const url=`http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[]);
    
    return (
        <div>
            <h2>My Orders: {myOrders.length} </h2>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="Orders">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Car Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((myOrder) => (
            <TableRow
              key={myOrder._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {myOrder.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{myOrder.location}</TableCell>
              <TableCell align="right">{myOrder.title}</TableCell>
              <TableCell align="right">{myOrder.price}</TableCell>
              <TableCell align="right">
                  <button className="btn btn-danger">Cancel</button>
              </TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell> */}
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default MyOrder; 