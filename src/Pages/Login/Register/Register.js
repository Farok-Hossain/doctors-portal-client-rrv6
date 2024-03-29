import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';   
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("Your password did not match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
              <Grid sx={{mt: 8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Register</Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                sx={{width: '75%', m: 1}} 
                id="standard-basic" 
                label="Your Name" 
                name="name"
                onChange={handleOnChange}
                variant="standard" />
                <TextField
                sx={{width: '75%', m: 1}} 
                id="standard-basic" 
                label="Your Email" 
                name="email"
                type="email"
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
                <br /> 
                <TextField
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                label="ReType Your Password"
                type="password"
                name="password2"
                onChange={handleOnChange}
                variant="standard"/> 
                
                <Button type="submit" variant="contained" sx={{width: '75%', m: 1}}>Register</Button> 
                
                <NavLink 
                to="/login"
                style={{textDecoration: 'none'}}>
                  <Button variant="text">Already Register? Please Login</Button>
                </NavLink>
                </form>}
                {isLoading && <CircularProgress></CircularProgress>}
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
              </Grid>
              <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={login} alt="" />
              </Grid>
              
            </Grid>
        </Container>
    );
};

export default Register;