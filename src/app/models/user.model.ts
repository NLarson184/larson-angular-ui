interface IUser {
    id: string;
    accessToken: string;
    email: string;
    firstname: string;
    lastname: string;
    roles: string[];
}

export class User {
    id: string = '';
    accessToken: string = '';
    email: string = '';
    firstname: string = '';
    lastname: string = '';
    roles: string[] = [];

    constructor(params: IUser) {
        Object.assign(this, params);
    }
}