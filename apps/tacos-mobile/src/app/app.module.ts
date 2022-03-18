import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MobileCoreModule } from '@food/mobile/core/modules';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), MobileCoreModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
