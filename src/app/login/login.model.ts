import { UserModel } from '../shared/model/user.model';

export class LoginModel {

    constructor(public user: UserModel, 
                public token: String,
                public isValidSession: boolean, 
                public startSessionDate: Date){}

}