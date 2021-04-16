import React from 'react';
import FormPart, { FormPartProps } from './FormPart';
import { Language } from '../Language';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface FormProps {
    id: string; // form number, eg 247B for fast entry to dungeon
    sequenceNumber: string; // nth number form printed, easily into MANY digits now, so changed to year-month-day-print Number
    title: string; // form title, such as 'Dungeon 102937-1 Entry Application'
    language: Language;
    parts: FormPartProps[];
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Form = ((props: FormProps):JSX.Element => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Grid container direction="column" spacing={1}>
            <Grid container direction="row" spacing={1}>
                <Grid item xs={6}>{props.id}</Grid>
                <Grid item xs={6}>{props.sequenceNumber}</Grid>
                <Grid item xs={12}>{props.title}</Grid>
            </Grid>
            { props.parts.map((part:FormPartProps) => {
                return <FormPart {...part} />
            })}
        </Grid>
    </div>;
});

export default Form;
export type { FormProps };