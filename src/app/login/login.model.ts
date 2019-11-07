import { UserModel } from '../shared/model/user.model';

export class LoginModel {
    user: UserModel;
    token: String;
    startSessionDate: Date;
}