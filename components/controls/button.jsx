import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const UseStyles = makeStyles({
    root: {
        backgroundColor: '#154c79',
        margin: theme.spacing(1, 'auto'),
        textTransform: 'none'
    },
});


export default function button(props) {

    const { text, size, variant, onClick, ...other } = props;
    const Styles = UseStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            onClick={onClick}
            classes ={{root:Styles.root}}
            {...other}
        >
            {text}
        </MuiButton>
    )
}
