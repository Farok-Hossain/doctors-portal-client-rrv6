import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                <Box>
                <Typography variant="h3">
                    Your New Smile <br />
                    Starts Here
                </Typography>
                <Typography variant="h6" sx={{fontSize: 14, my: 3, fontWeight: 300, color: 'gray'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum eos omnis voluptates facilis ipsa possimus nam error maiores et
                </Typography>
                <Button variant="contained" sx={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{width: 350 }} src={chair} alt="" />
            </Grid>
            
          </Grid>
        </Container>
    );
};

export default Banner;