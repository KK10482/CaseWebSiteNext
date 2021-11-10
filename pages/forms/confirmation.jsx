import React from 'react'
import Box from '@mui/material/Box';
import * as CaseInfo from './../../global';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import PageLayout from '../../components/layout/pageLayout';

export default function confirmation() {
    return (
        <PageLayout>
                <Box sx={{ p: 5 }}>
                    <Paper className='contactPageContent'>
                        <Typography gutterBottom variant="subtitle1" component="div" className="contactCaseTitle">Confirmation</Typography>
                        <br />
                        <Typography gutterBottom variant="body1" component="div" className="contactContent">
                            Thank you for submitting your claim. Your claim will be processed and reviewed soon. Please check back on
                            this website for any updates regarding case status, dates, or any information about when the settlement
                            payments will be sent.</Typography>
                    </Paper>
                </Box>
        </PageLayout>
    )
}
