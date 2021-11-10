import { Card, CardContent, CardHeader, Divider, IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import Link from "next/link";


const useStyles = makeStyles({
    tableRow: {
        height: '10'
      },
    tableCell: {
        padding: "0px 10px",
        borderBottom: "none"
    }


});

export default function CaseForms() {

    const classes = useStyles();

    return (
        <Card >
            <CardHeader className="headerRoot"
                avatar={
                    <IconButton >
                        <BusinessCenterRoundedIcon />
                    </IconButton>
                }
                title="Case Forms"
            />
            <Divider/>
            <CardContent >
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                        <FolderOpenRoundedIcon />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        <Link href='/forms/claimform'>
                        <a>Claim Form</a>
                        </Link>
                    </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                        <FolderOpenRoundedIcon />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        <Link href='/forms/optoutform'>
                        <a>Opt Out Form</a>
                        </Link>
                    </TableCell>
                </TableRow>                
                
            </CardContent>
        </Card>
    )
}
