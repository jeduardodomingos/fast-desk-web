export class UserModel {
    
    userId: Number;
    userName: String;
    userSurname: String;
    userEmail: String;
    userPhone: Number;
    userMobile: Number;
    hasWhatsapp: Number;

    constructor() {}

    clearAllFields()  {
        this.userId = null;
        this.userPhone = null;
        this.userMobile = null;
        this.hasWhatsapp = null;
        this.userName = "";
        this.userSurname = "";
        this.userEmail = "";
    }

}