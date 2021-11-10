import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import { useForm as UseForm, Form } from '../../Components/useForm';
import PageLayout from '../../components/layout/pageLayout';
import Controls from '../../components/controls';
import userControls from '../../components/userControls';
import OptOutStatic from '../../components/static/claimform/optout';
import { useRouter as UseRouter } from "next/router";
import * as Data from '../../Data/submitData';

const initialFormValues = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    stateID: '',
    zip: '',
    phone: '',
    email: '',
    signDate: new Date(),
    signName: ''
}

export default function optoutform() {
    const router = UseRouter();

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "First Name is Required.";
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "Last Name is Required.";
        if ('address1' in fieldValues)
            temp.address1 = fieldValues.address1 ? "" : "Street Address is Required.";
        if ('city' in fieldValues)
            temp.city = fieldValues.city ? "" : "City is Required.";
        if ('stateID' in fieldValues)
            temp.stateID = fieldValues.stateID.length !== 0 ? "" : "State is Required.";
        if ('zip' in fieldValues) {
            temp.zip = fieldValues.zip ? "" : "Zip is Required.";
            if (fieldValues.zip != '')
                temp.zip = (/^[0-9]{5}(?:-[0-9]{4})?$/.test(fieldValues.zip)) ? "" : "Zip code must be formatted properly (i.e. 12345 or 12345-6789)";
        }
        if ('phone' in fieldValues) {
            temp.phone = fieldValues.phone ? "" : "Required.";
            if (fieldValues.phone != '')
                temp.phone = (/^[0-9]{10}$/.test(fieldValues.phone)) ? "" : "Telephone number should be entered as a 10-digit number with no dashes (i.e. 1234567890)";
        }

        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? "" : "Email Address Required.";
            if (fieldValues.email != '')
                temp.email = (/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(fieldValues.email)) ? "" : "Email address must be properly formatted(i.e. name@domain.com)";
        }
        if ('signDate' in fieldValues)
            temp.signDate = fieldValues.signDate ? "" : "Date is Required.";

        if ('signature' in fieldValues)
            temp.signature = fieldValues.signature ? "" : "Signature is Required.";
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "");
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(initialFormValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            Data.insertOptOutData(values);
            router.push("/forms/confirmation");
        }
    }

    return (
        <PageLayout>
            
            <Box sx={{ p: 5 }}>
                <OptOutStatic />
                <Paper className='formpageContent'>
                    
                    <Typography gutterBottom variant="subtitle1" component="div" className='formTitle'>CLAIMANT INFORMATION</Typography>
                    <Typography gutterBottom variant="body2" component="div" className='formItalic'>Fields marked with an asterisk (*) are required.</Typography>
                    <Form onSubmit={handleSubmit}>
                        <Grid container>
                            <Controls.Input
                                name='firstName'
                                label='First Name'
                                required={true}
                                value={values.firstName}
                                onChange={handleInputChange}
                                error={errors.firstName}
                            />
                            <Controls.Input
                                name='lastName'
                                label='Last Name'
                                required={true}
                                value={values.lastName}
                                onChange={handleInputChange}
                                error={errors.lastName}
                            />
                            <userControls.Address
                                AddrValues={values}
                                onChange={handleInputChange}
                                AddrErrors={errors}
                            />
                            <Controls.Input
                                name='email'
                                label='Email Address'
                                required={true}
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}
                            />                            
                            <userControls.Phone
                                    name='phone'
                                    label='Phone Number'
                                    required={true}
                                    value={values.phone}
                                    onChange={handleInputChange}
                                    error={errors.phone}
                            />
                            <Controls.Input
                                name='signName'
                                label='Signature'
                                required={true}
                                value={values.firstName}
                                onChange={handleInputChange}
                                error={errors.firstName}
                            />
                            <Controls.DtPicker
                                    name='signDate'
                                    label='Dated'
                                    required={true}
                                    value={values.signDate}
                                    onChange={handleInputChange}
                                    error={errors.signDate}
                                />
                        </Grid>
                        <Grid container sx={{ px:'40%', textAlign: 'center' }}>
                            <Controls.Button
                                type="Submit"
                                text="Submit"
                            />
                        </Grid>
                    </Form>
                </Paper>
            </Box>
        </PageLayout>
    )
}
