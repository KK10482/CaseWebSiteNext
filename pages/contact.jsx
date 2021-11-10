import React from 'react'
import Box from '@mui/material/Box';
import * as CaseInfo from './../global';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import PageLayout from '../components/layout/pageLayout'

export default function contact() {

    return (
        <PageLayout>
                <Box sx={{ p: 5 }}>
                    <Paper className='contactPageContent'>
                        <Typography gutterBottom variant="subtitle1" component="div" className="contactSubtitle">If you have questions, please contact the Administrator at the contact information below.</Typography>
                        <br />
                        <Typography gutterBottom variant="body1" component="div" className="contactCaseTitle">{CaseInfo.CaseName}</Typography>
                        <Typography gutterBottom variant="body1" component="div" className="contactContent">c/o Simpluris, Inc.</Typography>
                        <Typography gutterBottom variant="body1" component="div" className="contactContent">{CaseInfo.Address1}</Typography>
                        <Typography gutterBottom variant="body1" component="div" className="contactContent">{CaseInfo.Address2}</Typography>
                        <Typography gutterBottom variant="body1" component="div" className="contactContent">Toll Free: {CaseInfo.TollFree}</Typography>
                    </Paper>
                </Box>
        </PageLayout>
    )
}
