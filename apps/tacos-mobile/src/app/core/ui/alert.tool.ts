import { Injectable, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertButton } from '@ionic/core';
import { MessageType } from '../api/models/message-type.class';

@Injectable({ providedIn: 'root' })
export class AlertTool {
  constructor(private readonly alertCtrl: AlertController, private readonly zone: NgZone) {}

  async present(
    message: string,
    confirmButton: string,
    confirm?: () => void,
    cancelButton?: string,
    cancel?: () => void,
    callback?: () => void
  ) {
    const buttons: AlertButton[] = [];

    if (cancelButton) {
      buttons.push({
        text: cancelButton,
        handler: () => {
          if (cancel != null) this.zone.run(async () => cancel());
        }
      });
    }

    if (confirmButton) {
      buttons.push({
        text: confirmButton,
        handler: () => {
          if (confirm != null) this.zone.run(async () => confirm());
        }
      });
    }

    this.show(message, buttons, callback);
  }

  async presentError(errors: MessageType[], callback?: () => void) {
    let message!: string;
    for (const error of errors) {
      message += error.description;
    }

    const button: AlertButton[] = [{ text: 'OK' }];

    this.show(message, button, callback);
  }

  async dismiss() {
    const modal = await this.alertCtrl.getTop();

    if (modal) {
      this.alertCtrl.dismiss();
    }
  }

  private async show(message: string, buttons: AlertButton[], callback?: () => void) {
    const alert = await this.alertCtrl.create({
      message: message,
      buttons: buttons,
      cssClass: 'alert'
    });

    if (callback != null) {
      alert.onDidDismiss().then(() => setTimeout(() => callback(), 100));
    }

    await alert.present();
  }
}
