import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class LoadingTool {
  constructor(private readonly loadingCtrl: LoadingController) {}

  async present(message = ''): Promise<void> {
    const loading = await this.loadingCtrl.create({
      message: message,
      showBackdrop: true
    });

    await loading.present();
  }

  dismiss(): void {
    this.loadingCtrl.dismiss();
  }
}
