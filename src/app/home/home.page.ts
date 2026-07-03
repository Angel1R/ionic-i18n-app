import { Component, inject } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonSelect, IonSelectOption, IonButton, IonItem, IonLabel,
  ToastController 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonSelect, IonSelectOption, IonButton, IonItem, IonLabel,
    TranslatePipe
  ],
})
export class HomePage {
  translate = inject(TranslateService);
  toastCtrl = inject(ToastController);

  // Añadimos el objeto de Chino al arreglo
  idiomas = [
    { code: 'es', nombre: 'Español' },
    { code: 'en', nombre: 'English' },
    { code: 'zh', nombre: '中文 (Chino)' } // <--- Nueva opción
  ];

  constructor() {
    this.translate.use('es'); 
  }

  cambiarIdioma(event: any) {
    const idiomaSeleccionado = event.detail.value;
    this.translate.use(idiomaSeleccionado);
  }

  async mostrarMensaje() {
    const mensajeTraducido = this.translate.instant('SUCCESS_SAVE');

    const toast = await this.toastCtrl.create({
      message: mensajeTraducido,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    
    await toast.present();
  }
}