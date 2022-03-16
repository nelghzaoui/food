import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../shared/shared.module';
import { PlusRouting } from './routes/plus.routing';

const MODULES = [SharedModule, PlusRouting];

@NgModule({
  declarations: [],
  providers: [],
  imports: [MODULES]
})
export class PlusModule {}
