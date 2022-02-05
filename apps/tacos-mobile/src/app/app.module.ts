import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { MobileShellModule } from '@food/mobile/shell/feature';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), MobileShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
