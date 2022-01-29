import { Calendar } from "./calendar.model";

interface IEvent {
    _id: string;
    name: string;
    dateTime: Date;
    creator: string;
    calendarList: Calendar[];
    notes: string;
}

export class Event {
    _id: string = '';
    name: string = '';
    dateTime: Date | undefined = undefined;
    creator: string = '';
    calendarList: Calendar[] = [];
    notes: string = '';

    constructor(params: IEvent) {
        Object.assign(this, params);
    }
}