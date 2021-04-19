import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormProps } from '../data/GoblinBureaucracy/Form';

interface Form extends FormProps {
    uid?: string;
}

class FormStore {
    @observable forms: Form[] = [];

    @action addForm = (form: Form):string => {
        const uuid = uuidv4();
        this.forms.push({ ...form, id: uuid });
        return uuid;
    }

    @computed get getAllForms() {
        return this.forms;
    }

    @action updateForm = (form: Form) => {
        this.forms = this.forms.map(formA => {
            if (formA.uid === form.uid) {
                return form;
            } else {
                return formA;
            }
        });
    }
}

export default createContext(new FormStore());