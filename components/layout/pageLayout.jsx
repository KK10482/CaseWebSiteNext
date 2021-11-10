import React from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head'
import { Box } from '@mui/system';
import * as CaseInfo from '../../global';

export default function pageLayout({ children }) {
    return (
        <>
            <Head>
                <title>{CaseInfo.CaseName}</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <Header />
            {children}
            <Box id="pageLayoutBox" display="flex" justifyContent="center" mt={2} mb={2}>
            </Box>
            <Footer />
        </>
    )
}
