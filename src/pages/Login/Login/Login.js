import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/convert png/toyato3.png'

const Login = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                 <Typography sx={{ fontWeight: 600 }} variant="h5" gutterBottom>
                            Login
                 </Typography>
                 <form>
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
                 <Button  sx={{width:'75%',m:1}} variant='contained'>Login</Button>
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