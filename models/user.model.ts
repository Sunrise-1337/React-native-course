import { LoginModel } from "./login.model";

export class UserModel extends LoginModel{
    id?: number;
    realName: string;
    gender: string;
    age: number;
    profilePicture?: string;
}