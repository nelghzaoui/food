import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { MobileCoreModule } from '@food/mobile/core/modules';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), MobileCoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
