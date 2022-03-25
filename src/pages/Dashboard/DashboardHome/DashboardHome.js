import * as React from 'react';
import { Grid } from '@mui/material';
import AddReview from '../AddReview/AddReview';


const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <AddReview></AddReview>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;