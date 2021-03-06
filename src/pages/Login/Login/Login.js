import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/convert png/toyato3.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData,setLoginData]= useState({});
    const { user,authError,isLoading,googleSignIn,loginUser} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);

    };

   

    const handleLoginSubmit =(e)=>{
        loginUser(loginData.email, loginData.password,location,history);
        alert('Login Done')
        e.preventDefault()
    };

    const handleGoogleSignIn =()=>{
        googleSignIn(location,history)
    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                 <Typography sx={{ fontWeight: 600 }} variant="h5" gutterBottom>
                            Login
                 </Typography>
                 <form onSubmit={handleLoginSubmit}>
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Your Email" 
                    variant="standard"
                    onBlur={handleOnChange} 
                    name='email'
                    type="email"
                 />
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Your Password" 
                    variant="standard"
                    onBlur={handleOnChange}  
                    name='password'
                    type='password'
                 />
                 <Button  type='submit' sx={{width:'75%',m:1}} variant='contained'>Login</Button>
                 
                 <Link style={{textDecoration:"none"}} to='/register'>
                      <Button  sx={{width:'75%',m:1}} variant='text'>Create Your Account</Button>
                 </Link>
                 {isLoading && <CircularProgress></CircularProgress>}
                 {user?.email && <Alert severity='success'>User Logged In </Alert>}
                 {authError && <Alert severity='error'>{authError}</Alert>}
                 </form>
                 <p>-- -- -- -- --</p>
                 <Button  onClick={handleGoogleSignIn}  variant='contained'>Google Signin</Button>
                </Grid>

                <Grid items xs={12} md={6}>
                    <img src={login} style={{ width: '100%', margin: '30px', borderRadius: '10px' }} alt="" />
                </Grid>


            </Grid>

            </Container>

        </>
    );
};

export default Login;