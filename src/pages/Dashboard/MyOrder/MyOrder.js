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


    useEffect(()=>{
        const url=`http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[]);

    //delete order
    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = myOrders?.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
            console.log(id);
        }
    };
    
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
                    <TableCell align="right">Date</TableCell>
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
                    <TableCell align="right">{myOrder.email}</TableCell>
                    <TableCell align="right">{myOrder.location}</TableCell>
                    <TableCell align="right">{myOrder.date}</TableCell>
                    <TableCell align="right">{myOrder.title}</TableCell>
                    <TableCell align="right">{myOrder.price}</TableCell>
                    <TableCell align="right">
                        <button onClick={() => handleDelete(myOrder?._id)} className="btn btn-danger">Cancel</button>
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