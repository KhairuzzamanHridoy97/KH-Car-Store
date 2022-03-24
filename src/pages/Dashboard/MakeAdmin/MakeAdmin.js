import React ,{useState}from 'react';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin =()=>{
    const [email,setEmail] = useState('')

    const handleOnBlur =e=>{
       
        setEmail(e.target.value)
    }
     const handleAdminSubmit = e =>{
            const user ={email};
            fetch('http://localhost:5000/users/admin',{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                }
                ,body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    console.log(data)
                    // setEmail('');
                    setSuccess(true)
                }
            })
            e.preventDefault()
        }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id='standard-basic' 
                    label="Email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant='standard'
                />
                <Button variant="contained">Submit</Button>
               
            </form>
        </div>
    )
}

export default MakeAdmin ;