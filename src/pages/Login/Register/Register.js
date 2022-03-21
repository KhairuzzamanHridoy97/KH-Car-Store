import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/convert png/toyato3.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData]= useState({});

    const {user, registerUser,isLoading,authError} = useAuth();

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]= value;
        setLoginData(newLoginData);
    };

    const handleRegister = e=>{
        if(loginData.password !== loginData.password2){

            alert('Password Not Match')
            return
        }
        registerUser(loginData.email,loginData.password)
        e.preventDefault();
    }
    return (
        <>
            {/* <Navigation></Navigation> */}
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                 <Typography sx={{ fontWeight: 600 }} variant="h5" gutterBottom>
                           Create Your Account
                 </Typography>
                 {!isLoading && <form onSubmit={handleRegister}>
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Your Name" 
                    variant="standard"
                    name='name'
                    onChange={handleOnChange} 
                    type="text"
                 />
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Your Email" 
                    variant="standard"
                    name='email'
                    onChange={handleOnChange}  
                    type="email"
                 />
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Your Password" 
                    variant="standard"
                    name='password'
                    onChange={handleOnChange}  
                    type="password"
                 />
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Retype Password" 
                    variant="standard" 
                    name='password2'
                    onChange={handleOnChange} 
                    type='password'
                 />
                 <Button type='submit' sx={{width:'75%',m:1}} variant='contained'>Register</Button>

                 <Link to='/login' style={{textDecoration:"none"}}>
                     <Button  sx={{width:'75%',m:1}} variant='text'> Are Your Registered! So Login Here </Button>
                 </Link>
                 </form>}
                 {isLoading && <CircularProgress></CircularProgress>}
                 {user?.email && <Alert severity='success'>Succussfully Registered! </Alert>}
                 {authError && <Alert severity='error'>{authError}</Alert>}
                </Grid>

                <Grid items xs={12} md={6}>
                    <img src={login} style={{ width: '100%', margin: '30px', borderRadius: '10px' }} alt="" />
                </Grid>


            </Grid>

            </Container>

        </>
    );
};

export default Register;