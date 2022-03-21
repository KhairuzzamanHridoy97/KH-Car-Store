import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/convert png/toyato3.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLoginSubmit =(e)=>{
        alert('Login Done')
        e.preventDefault()
    }
    return (
        <>
            {/* <Navigation></Navigation> */}
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
                    name='email' 
                    type="email"
                 />
                 <TextField 
                    sx={{width:'75%',m:1}}
                    id="standard-basic" 
                    label="Your Password" 
                    variant="standard" 
                    name='password'
                    type='password'
                 />
                 <Button  type='submit' sx={{width:'75%',m:1}} variant='contained'>Login</Button>
                 
                 <Link style={{textDecoration:"none"}} to='/register'>
                      <Button  sx={{width:'75%',m:1}} variant='text'>Create Your Account</Button>
                 </Link>
                 </form>
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