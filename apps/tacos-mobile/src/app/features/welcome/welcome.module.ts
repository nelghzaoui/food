import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeRouting } from './routes/welcome.routing';
import { WelcomePage } from './views/welcome.page';

@NgModule({
  imports: [SharedModule, WelcomeRouting],
  declarations: [WelcomePage]
})
export class WelcomeModule {}
