import { User } from "../../models/user.model";

interface ICalendar {
    id: string;
    name: string;
    color: string;
    owner: User | string;
}

export class Calendar {
    id: string = '';
    name: string = '';
    color: string = '';
    owner: User | string = '';

    constructor(params: ICalendar) {
        Object.assign(this, params);
    }
}