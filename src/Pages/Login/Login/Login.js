import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';



const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        alert('login form submitted');
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
              <Grid sx={{mt: 8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField
                sx={{width: '75%', m: 1}} 
                id="standard-basic" 
                label="Your Email" 
                name="email"
                onChange={handleOnChange}
                variant="standard" />
                <br />
                <TextField
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"/> 
                
                <Button type="submit" variant="contained" sx={{width: '75%', m: 1}}>Login</Button> 
                
                <NavLink 
                to="/register"
                style={{textDecoration: 'none'}}>
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
                </form>
              </Grid>
              <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={login} alt="" />
              </Grid>
              
            </Grid>
        </Container>
    );
};

export default Login;