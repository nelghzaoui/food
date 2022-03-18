import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HomePage } from './views/home.page';
import { HomeRouting } from './routes/home.routing';

@NgModule({
  imports: [SharedModule, HomeRouting],
  declarations: [HomePage]
})
export class HomePageModule {}
