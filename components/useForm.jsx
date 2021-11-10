import React, {useState} from 'react'

export function useForm(initialFormValues, validateOnChange =false,validate) {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
            validate({[name]:value})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}


export function Form(props) {

    const {children,...other} = props;
    return (
        <form className='formpageContent' {...other}>
            {props.children}
        </form>
    )
}
