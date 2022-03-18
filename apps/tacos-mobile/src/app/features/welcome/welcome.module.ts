import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WelcomePage } from './views/welcome.page';

@NgModule({
  imports: [SharedModule],
  declarations: [WelcomePage]
})
export class WelcomeModule {}
