import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
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
                {isLoading && <CircularProgress></CircularProgress>}
                {user?.email && <Alert severity="success">User login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
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