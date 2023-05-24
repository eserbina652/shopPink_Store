import {IUser} from "../../screens/profile/types";

export interface ILoginedUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

export interface ISearchedUser {
    limit: number;
    skip: number;
    total: number;
    users: IUser[];
}