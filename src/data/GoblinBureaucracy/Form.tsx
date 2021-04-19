import React, { useContext } from 'react';
import FormPart, { FormPartProps } from './FormPart';
import { Language } from '../Language';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react-lite';
import FormStore from '../../stores/FormStore';

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

const Form = ((props: FormProps): JSX.Element => {
    const classes = useStyles();

    const formStore = useContext(FormStore);
    const { updateForm } = formStore;

    const onSubmit = ((e: React.FormEvent) => {
        e.preventDefault();
        alert('form submitted');
        updateForm(e.target);
        console.log(props);
    });

    return <div className={classes.root}>
        <form id={'form ' + props.id} onSubmit={((e) => { onSubmit(e) })} >
            <Grid container direction="column" spacing={1}>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={6}>{props.id}</Grid>
                    <Grid item xs={6}>{props.sequenceNumber}</Grid>
                    <Grid item xs={12}>{props.title}</Grid>
                </Grid>
                {props.parts.map((part: FormPartProps) => {
                    return <FormPart {...part} />
                })}
            </Grid>
            <Button variant='contained' type='submit'>Submit</Button>
        </form>
    </div>;
});

export default observer(Form);
export type { FormProps };