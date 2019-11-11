import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { MainPageService } from './main-page.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(private mainPageService: MainPageService, 
              private router: Router, 
              private route: ActivatedRoute,
              private elementReference: ElementRef, 
              private rendered: Renderer2) { }

  ngOnInit() {
    this.setBodyBakcground();
    this.checkLoggedOn();
  }

  ngOnDestroy() {
    this.mainPageService.invalidateUserSession();
  }

  private setBodyBakcground(): void {
    this.rendered.setStyle(this.elementReference.nativeElement.ownerDocument.body, 'background', 'white');
  }

  private async checkLoggedOn(): Promise<void> {

    if(!this.mainPageService.chekLoggedOn()) {
    
      this.rendered.setStyle(this.elementReference.nativeElement.ownerDocument.body, 'background', '#343a40');

      await Swal.fire({
        title: 'Acesso Negado',
        html: '<label>Parece que você não está autenticado, por favor aguarde, em instantes você será direcionado para a tela de login</label><br/><label><b>Redirecionando em  5 Segundos</b> </label>',
        allowEscapeKey: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        imageUrl: '../../assets/images/cop-car-image.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Acesso Negado',
        timer: 6000,
        onBeforeOpen: () => {
          Swal.showLoading();

          setInterval(() => {
            let timerLeft = Math.floor(Swal.getTimerLeft() / 1000);
            Swal.getContent().querySelector('b').textContent = (timerLeft == NaN ? 0 : timerLeft) > 0 ? "Redirecionando em " +  timerLeft.toString() + " Segundos" : "Redirecionando ...";
          }, 1000);

        },
        onClose: () => {
          this.router.navigate(['/login'], {relativeTo: this.route});
        }
      });
    }

  }

}
