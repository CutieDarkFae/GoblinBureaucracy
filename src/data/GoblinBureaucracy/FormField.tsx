import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'

interface FormFieldProps {
    label: string;
    value: string;
}

const FormField = ((props: FormFieldProps):JSX.Element => {
    const [value, setValue] = useState(props.value);

    const onChange = ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.target.value);
    });

    return <TextField 
        id={props.label} 
        label={props.label} 
        variant='outlined' 
        onChange={((e) => { onChange(e) })}
        value={value}
    />;
});

export default FormField;
export type { FormFieldProps };