import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { PlusRouting } from './routes/plus.routing';
import { PlusPage } from './views/plus/plus.page';

const MODULES = [SharedModule, PlusRouting];

@NgModule({
  declarations: [PlusPage],
  providers: [],
  imports: [MODULES]
})
export class PlusModule {}
