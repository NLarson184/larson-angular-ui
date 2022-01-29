import { User } from "./user.model";

interface ICalendar {
    _id: string;
    name: string;
    color: string;
    owner: User | string;
}

export class Calendar {
    _id: string = '';
    name: string = '';
    color: string = '';
    owner: User | string = '';

    constructor(params: ICalendar) {
        Object.assign(this, params);
    }
}