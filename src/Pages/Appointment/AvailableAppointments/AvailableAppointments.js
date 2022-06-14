import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]

const AvailableAppointments = ({date}) => {
    
    return (
        <Container>
            <Typography sx={{ color: 'info.main', mb: 3}} variant="h4">Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;