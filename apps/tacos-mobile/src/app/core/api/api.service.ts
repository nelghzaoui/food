import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoadingTool } from '../ui/loading.tool';
import { ErrorStatus } from './models/error-status.enum';
import { HttpMethod } from './models/http-method.enum';
import { MessageType } from './models/message-type.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loadingTool: LoadingTool,
    private readonly platform: Platform
  ) {}

  get<T>(service: string, parameters?: any, hasLoading = true): Observable<T> {
    return this.request<T>(HttpMethod.GET, service, parameters, hasLoading);
  }

  private request<T>(method: HttpMethod, service: string, body = {}, showLoading: boolean): Observable<T> {
    return new Observable<T>((observer) => {
      if (showLoading) this.loadingTool.present();

      this.httpClient
        .request<T>(method, `${environment.endpoint}/${service}/`, body)
        .pipe(take(1))
        .subscribe({
          next: (v) => {
            observer.next(v);
            this.log(v);
          },
          error: (e) => observer.error(this.handleError(e)),
          complete: () => {
            observer.complete();
            this.loadingTool.dismiss();
          }
        });
    });
  }

  private async handleError(e): Promise<MessageType[]> {
    const errors: MessageType[] = [];
    const error = new MessageType(e.url, e.error, e.data, e.status);

    const connectionType = (await Network.getStatus()).connectionType;
    if (this.platform.is('android') && connectionType === 'none') {
      e.status = ErrorStatus.NOT_CONNECTED;
    }

    switch (e.status) {
      case ErrorStatus.NOT_CONNECTED:
        error.description = 'not connected';
        break;
      default:
        error.description = 'error server';
        break;
    }

    errors.push(error);

    return errors;
  }

  private log(logs: any) {
    if (!environment.production) {
      console.groupCollapsed(`[${new Date()}] Response -------------`);
      console.log(logs);
      console.groupEnd();
    }
  }
}
