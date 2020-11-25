import { Note } from './note';

export class Employee {
    id: number;
    birthDate: Date;
    first_name: string;
    last_name: string;
    avatar: string;
    email: string;
    alias: string;
    

    notes: Note[] = [];
}
