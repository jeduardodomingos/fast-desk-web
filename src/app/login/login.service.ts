import { Injectable } from '@angular/core';
import { WebApiConnectorService } from '../shared/web-api/web-api-connector.service';
import { Observable } from 'rxjs';
import * as sha256 from 'sha256';
import { LoginModel } from './login.model';
import { UserModel } from '../shared/model/user.model';
import { SessionVariables } from '../shared/enum/session-variables';

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
        new UserModel(userData.user.id, userData.user.name, userData.user.surname, userData.user.email, new Date(userData.user.bornDate)),
        userData.token,
        true,
        new Date()
      );

      sessionStorage.setItem(SessionVariables.USER_SESSION, JSON.stringify(loginModel));
      
      if(remember) {
        localStorage.setItem(SessionVariables.USER_DATA_EMAIL, email);
      }

      }catch(ex) {
        loggedIn = {status: false, message: ex.status == 401? 'Usuário e/ou senha inválidos, por favor verifique as informações e tente novamente.' : 'Erro ao realizar autenticação, por favor contate o administrador do sistema.'};
     }

     return loggedIn;
   }

}