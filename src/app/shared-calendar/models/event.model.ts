import { Calendar } from "./calendar.model";

interface IEvent {
    id: string;
    name: string;
    dateTime: string;
    creator: string;
    calendarList: string[];
    notes: string;
}

export class Event {
    id: string = '';
    name: string = '';
    dateTime: string = '';
    creator: string = '';
    calendarList: string[] = [];
    notes: string = '';

    constructor(params: IEvent) {
        Object.assign(this, params);
    }
}