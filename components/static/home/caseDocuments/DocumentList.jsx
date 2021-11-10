import { Card, CardContent, CardHeader, Divider, IconButton, } from '@mui/material'
import React from 'react'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Document from './Document';


export default function DocumentList() {
    return (
        <Card>
            <CardHeader className="headerRoot"
                avatar={
                    <IconButton >
                        <ListAltRoundedIcon />
                    </IconButton>
                }
                title="Case Documents"
            />
            <Divider/>
            <CardContent >
                <Document name="Preliminary Approval Order (PDF)" path="http://docs.simpluris.com/5727/BlackAndDecker_Starke_Preliminary Approval Order.pdf" />
                <Document name="Notice (PDF)" path="http://docs.simpluris.com/5727/BlackAndDecker_Starke_Short Form Notice.pdf" />
                <Document name="Claim Form (PDF)" path="http://docs.simpluris.com/5727/BlackAndDecker_Starke_Claim Form.pdf" />
            </CardContent>
        </Card>
    )
}
