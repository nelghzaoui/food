import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [COMPONENTS],
  imports: [SharedModule.MODULES],
  exports: [SharedModule.MODULES, COMPONENTS]
})
export class SharedModule {
  private static MODULES = [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, TranslateModule];
}
