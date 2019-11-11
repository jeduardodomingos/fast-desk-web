import { Component, OnInit, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private rendered: Renderer2, private elementReference: ElementRef) { }

  ngOnInit() {
    this.buildLoginForm();
    this.checkSavedEmail();
  }

  ngAfterViewInit(): void {
    this.setBodyBakcground();
  }

  public async login(): Promise<any> {
    let isAuthenticated = {status: false, message: ''};

    await Swal.fire({
      title: 'Entrando ...',
      text: 'Validando Informações de acesso, por favor aguarde ...',
      icon: 'warning',
      allowOutsideClick: !Swal.isLoading,
      allowEscapeKey: !Swal.isLoading,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      onOpen: async () => {
        isAuthenticated = await this.loginService.login(this.loginForm.get('userEmail').value, this.loginForm.get('userPassword').value, true);
        Swal.close();
      }
    });

    if(isAuthenticated.status == true) {
      
    } else {
      Swal.fire('Ooops', isAuthenticated.message, 'error');
    }
  }

  private buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]],
      rememberEmail: ['']
    });
  }

  private checkSavedEmail(): void{
    this.loginForm.get('userEmail').setValue(localStorage.getItem('user-data-email-fastdesk') || '');
  }

  private setBodyBakcground(): void {
    this.rendered.setStyle(this.elementReference.nativeElement.ownerDocument.body, "background", "url('../../assets/images/login-background.jpg') no-repeat 0 0");
  }
}
