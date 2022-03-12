import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { MobileCoreModule } from '@food/mobile/core/modules';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), MobileCoreModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
