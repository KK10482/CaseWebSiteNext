import { Card, CardContent, CardHeader, Divider, IconButton } from '@mui/material';
import React from 'react'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Milestone from './Milestone';

export default function MilestoneList() {

    return (
        <Card>
            <CardHeader className="headerRoot"
                avatar={
                    <IconButton >
                        <ListAltRoundedIcon />
                    </IconButton>
                }
                title="Important Dates"
            />
            <Divider />
            <CardContent >
                <Milestone title="Claims Deadline" date="01/11/2022" />
                <Milestone title="Opt Out Deadline" date="12/27/2021" />
                <Milestone title="Objection Deadline" date="12/27/2021" />
                <Milestone title="Objection Deadline" date="03/18/2022 at 1:30 p.m." />
            </CardContent>
        </Card>
    )
}
