import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [SharedModule.MODULES],
  exports: [SharedModule.MODULES]
})
export class SharedModule {
  private static MODULES = [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, TranslateModule];
}
