import { Card, CardContent, CardHeader,  TableRow, TableCell } from '@mui/material'
import React from 'react'
import IconButton from "@mui/material/IconButton";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { makeStyles } from '@mui/styles';
import * as CaseDetails from './../../../global';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styles from '../../../styles/Home.module.css'

const useStyles = makeStyles({
    tableRow: {
        height: '12px'
      },
      tableCell: {
        padding: "0px 10px",
        borderBottom: "none"
    }
});

export default function CaseInfo() {

    const classes = useStyles();

    return (
        <Card >
            <CardHeader className="headerRoot"
                avatar={
                    <IconButton >
                        <ViewListRoundedIcon/>
                    </IconButton>
                }
                title="Case Information"
            />
            <CardContent >
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                        <BusinessCenterRoundedIcon />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        {CaseDetails.CaseName}
                    </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        THE CIRCUIT COURT OF BALTIMORE COUNTY, MARYLAND
                    </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        Case No. C-03-CV-21-001091
                    </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                    <TableCell width="5%" className={classes.tableCell}>
                        <LocalPhoneIcon />
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                        {CaseDetails.TollFree}
                    </TableCell>
                </TableRow>

            </CardContent>
        </Card>
    )
}
