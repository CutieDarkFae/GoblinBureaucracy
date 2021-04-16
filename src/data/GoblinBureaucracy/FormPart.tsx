import React from 'react';
import FormField, { FormFieldProps } from './FormField';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';


interface FormPartProps {
    id: string;
    partNumberOnForm: Number;
    fields: FormFieldProps[];
    stamped: boolean;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        minHeight:128,
        minWidth: 128,
    },
}));

const FormPart = ((props: FormPartProps): JSX.Element => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Grid container spacing={1}>
            <Grid item xs={6}>Part #{props.partNumberOnForm}</Grid>
            <Grid item xs={6}><img className={classes.img} src='../../../public/logo512.png' alt='stamp of approval' /></Grid>
            {props.fields.map((field: FormFieldProps): JSX.Element => {
                return <Grid item xs={4}><FormField {...field} /></Grid>
            })}
        </Grid>
    </div >;
});

export default FormPart;
export type { FormPartProps };