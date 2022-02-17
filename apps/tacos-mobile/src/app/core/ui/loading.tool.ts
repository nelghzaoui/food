import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class LoadingTool {
  constructor(private readonly loadingCtrl: LoadingController) {}

  async present(message = '') {
    const loading = await this.loadingCtrl.create({
      message: message,
      showBackdrop: true
    });

    return loading.present();
  }

  async dismiss() {
    const loader = await this.loadingCtrl.getTop();

    if (loader) {
      this.loadingCtrl.dismiss();
    }
  }
}
