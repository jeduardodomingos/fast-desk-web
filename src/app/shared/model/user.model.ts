export class UserModel {
    

    constructor(public userId: number, 
                public userName: String, 
                public userSurname: String, 
                public userEmail: String, 
                public userBornDate: Date) {}

    public clearAllFields()  {
        this.userId = null;
        this.userName = "";
        this.userSurname = "";
        this.userEmail = "";
        this.userBornDate = null;
    }

}