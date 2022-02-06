import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule],
  declarations: [HomePage]
})
export class HomePageModule {}
