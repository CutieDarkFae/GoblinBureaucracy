import { FormProps } from './Form';
import { FormPartProps } from './FormPart';
import { FormFieldProps } from './FormField';
import { Language } from '../Language';

interface FormLevel {
    level: number;
    parts: number[]; // distribution chart for how many parts a form will have at this level of the bureaucracy
}

const formLevels: FormLevel[] = [{
    level: 1,
    parts: [5, 4, 4, 4, 3]
}, {
    level: 2,
    parts: [1, 2, 3, 3, 4]
}, {
    level: 3,
    parts: [1, 1, 2, 2, 3]
}, {
    level: 4,
    parts: [1, 1, 1, 1, 1]
}];

const letters: string = 'ABCEFGHIJKLMNOPQRSTUVWXYZ'; // english as we want the pc's to understand.
const generateRandomFormId = ((numNumbers: number, numChars: number): string => {
    let parts = [];
    for (let i = 0; i < numNumbers; i++) {
        parts.push(Math.floor(Math.random() * 10));
    }
    for (let i = 0; i < numChars; i++) {
        parts.push(letters.charAt(Math.floor(Math.random() * letters.length)));
    }
    return parts.join('');
});

const generateRandomString = ((length: number, language: Language): string => {
    let parts = [];
    for (let i = 0; i < length; i++) {
        parts.push(language.charset.charAt(Math.floor(Math.random() * language.charset.length)));
    }
    return parts.join('');
});

const numFieldsInAPart: number[] = [4, 6, 8, 10, 12, 10, 12, 14];
const generateForm = ((level: number, name: string, language: Language): FormProps => {
    // generate an id for this form
    let id = generateRandomFormId(level, level / 2);
    let sequenceNumber = '1897-6-14-' + generateRandomFormId(8,0);
    const numParts = formLevels[level].parts[Math.floor(Math.random() * 5)];
    let title = name;
    let parts = [];
    for (let i = 0; i < numParts; i++) {
        parts.push(generateFormPart(i, numFieldsInAPart[Math.floor(Math.random() * numFieldsInAPart.length)], language));
    }
    return {
        id: id,
        sequenceNumber: sequenceNumber,
        title: title,
        parts: parts,
        language: language
    };
});

const generateFormPart = ((partNumber: number, numFields: number, language: Language): FormPartProps => {
    let id = generateRandomFormId(2, 1);
    let partNumberOnForm = partNumber + 1;
    let fields:FormFieldProps[] = [];
    for (let i = 0; i < numFields; i++) {
        fields.push(generateFormPartField(language));
    }
    let stamped = false;
    return {
        id: id,
        partNumberOnForm: partNumberOnForm,
        fields: fields,
        stamped: stamped
    };
});

const fieldLengths: number[] = [2, 3, 3, 4, 4, 4, 5];
const generateFormPartField = ((language: Language): FormFieldProps => {
    const length = fieldLengths[Math.floor(Math.random() * fieldLengths.length)]
    return {
        label: generateRandomString(length, language),
        value: ''
    }
});

export default generateForm;
export { generateRandomString }