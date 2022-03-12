import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePage } from './home.page';
import { HomeRouting } from './home.routing';

@NgModule({
  imports: [SharedModule, HomeRouting],
  declarations: [HomePage]
})
export class HomePageModule {}
