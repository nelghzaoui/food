import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import localeNL from '@angular/common/locales/nl-BE';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { IonicRouteStrategy } from '@ionic/angular';
import { Currency, Language } from '@food/shared/models/environment';
import { MobileCoreRouting } from './routes/mobile-core.routing';

registerLocaleData(localeEN, localeFR, localeNL);

@NgModule({
  imports: [MobileCoreModule.MODULES],
  providers: [MobileCoreModule.PROVIDERS]
})
export class MobileCoreModule {
  private static MODULES = [
    BrowserModule,
    MobileCoreRouting,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: Language.EN,
      loader: {
        provide: TranslateLoader,
        useFactory: MobileCoreModule.httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ];

  private static PROVIDERS = [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: Currency.EN }
  ];

  private static httpLoaderFactory(http: HttpClient): MultiTranslateHttpLoader {
    return new MultiTranslateHttpLoader(http, [
      { prefix: './assets/i18n/core/', suffix: '.json' },
      { prefix: './assets/i18n/order/', suffix: '.json' },
      { prefix: './assets/i18n/shared/', suffix: '.json' }
    ]);
  }
}
