import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Booking = ({booking}) => {
    const {name, time, space} = booking;
    return (
        
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} >
            <Typography variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            </Paper>
        </Grid>
        
    );
};

export default Booking;