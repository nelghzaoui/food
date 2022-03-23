import { NgModule } from '@angular/core';
/* Modules */
import { SharedModule } from '../../../../../shared/shared.module';
import { TacosRouting } from './routes/tacos.routing';
/* Providers */
import { TacosService } from './services/tacos.service';
import { TacosQuery } from './redux/tacos.query';
import { TacosStore } from './redux/tacos.store';
/* Views */
import { TacosComponent } from './views/tacos.component';
import { StyleComponent } from './views/select-style/style.component';

const VIEWS = [TacosComponent, StyleComponent];
const PROVIDERS = [TacosService, TacosQuery, TacosStore];
const MODULES = [SharedModule, TacosRouting];

@NgModule({
  imports: [MODULES],
  declarations: [VIEWS],
  providers: [PROVIDERS]
})
export class TacosModule {}
