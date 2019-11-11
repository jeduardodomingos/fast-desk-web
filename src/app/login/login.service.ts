import { Injectable } from '@angular/core';
import { WebApiConnectorService } from '../shared/web-api/web-api-connector.service';
import { Observable } from 'rxjs';
import * as sha256 from 'sha256';
import { LoginModel } from './login.model';
import { UserModel } from '../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiConnector: WebApiConnectorService) { }

   async login(email: string, password: string, remember: boolean): Promise<any> {
     let loggedIn =  null;
     
     try{
      let response = await this.apiConnector.getUrl(`login/${email}/${sha256(email + password)}`).toPromise();
      
      loggedIn = {status: !(response.status == 401), message: response.status == 401? 'Usuário e/ou senha inválidos, por favor verifique as informações e tente novamente.' : 'Usuário autenticado com sucesso'};

      let userData = JSON.parse(response._body);

      let loginModel = new LoginModel(
        new UserModel(userData.id, userData.name, userData.surname, userData.email, new Date(userData.bornDate)),
        userData.token,
        true,
        new Date()
      );

      sessionStorage.setItem('user-session-fastdesk', JSON.stringify(loginModel));
      
      if(remember) {
        localStorage.setItem('user-data-email-fastdesk', email);
      }

      }catch(ex) {
        console.log(ex);
        loggedIn = {status: false, message: ex.status == 401? 'Usuário e/ou senha inválidos, por favor verifique as informações e tente novamente.' : 'Erro ao realizar autenticação, por favor contate o administrador do sistema.'};
     }

     return loggedIn;
   }

}