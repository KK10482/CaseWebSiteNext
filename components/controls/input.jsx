import { TextField } from '@mui/material';
import React from 'react'

export default function input(props) {

    const { name, label, value, onChange, error=null,required } = props;

    return (
         <>
            <TextField
                size="small"
                // required ={required}
                label={required? label +' *':label}
                name={name}
                values={value}
                onChange={onChange}
                {...(error && {error:true,helperText:error})}
            />
        </>
    )
}
