import { NgModule, APP_INITIALIZER } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MobileCoreModule } from '@food/mobile/core/modules';
import { AppComponent } from './app.component';
import { IsFirstLaunch } from './core/guards/first-launch.guard';
import { FoodService } from './core/services/food/food.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (f: FoodService) => () => f.init(),
    //   deps: [FoodService],
    //   multi: true
    // }
  ],
  imports: [
    MobileCoreModule,
    IonicModule,
    RouterModule.forRoot(AppModule.ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static readonly ROUTES: Routes = [
    {
      path: 'welcome',
      loadChildren: () => import('./features/welcome/welcome.module').then((m) => m.WelcomeModule),
      canActivate: [IsFirstLaunch]
    },
    {
      path: 'tabs',
      loadChildren: () => import('./features/tabs/tabs.module').then((m) => m.TabsModule)
    },
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }
  ];
}
