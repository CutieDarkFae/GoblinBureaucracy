interface Language {
    id: number;
    name: string;
    description: string;
    charset: string;
}

const languages: Language[] = [{
    id: 0,
    name: 'Common',
    description: 'The common trade language, spoken by most everybody',
    charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-,.!'
}, {
    id: 1,
    name: 'Goblinese',
    description: 'The language of Goblins',
    charset: 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ'
}];

export default languages;
export type { Language };