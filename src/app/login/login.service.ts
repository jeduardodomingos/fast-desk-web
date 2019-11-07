import { Injectable } from '@angular/core';
import { WebApiConnectorService } from '../shared/web-api/web-api-connector.service';
import { Observable } from 'rxjs';
import * as sha256 from 'sha256';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiConnector: WebApiConnectorService) { }

  login(email: string, password: string): Observable<any> {
    return this.apiConnector.getUrl(`login/${email}/${sha256(email + password)}`).subscribe((response) => {
      
    });
  }

}
