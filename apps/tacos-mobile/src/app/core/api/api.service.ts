import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoadingTool } from '../ui/loading.tool';
import { HttpMethod } from './models/http-method.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient, private readonly loadingTool: LoadingTool) {}

  get<T>(service: string, parameters?: any, hasLoading = true): Observable<T> {
    return this.request<T>(HttpMethod.GET, service, parameters, hasLoading);
  }

  private request<T>(method: HttpMethod, service: string, body = {}, showLoading: boolean): Observable<T> {
    return new Observable<T>((observer) => {
      if (showLoading) this.loadingTool.present();

      this.httpClient
        .request<T>(method, `${environment.endpoint}/${service}/`, body)
        .pipe(take(1))
        .subscribe(
          (response) => {
            observer.next(response);
            this.log(response);
          },
          (error) => observer.error(error),
          () => {
            observer.complete();
            this.loadingTool.dismiss();
          }
        );
    });
  }

  // private async handleError(e): Promise<MessageType[]> {
  //   const errors: MessageType[] = [];
  //   const error = new MessageType(e.url, e.error, e.data, e.status);

  //   const connectionType = (await Network.getStatus()).connectionType;
  //   if (this.platform.is('android') && connectionType === connectionType['none']) {
  //     e.status = ErrorStatus.NOT_CONNECTED;
  //   }

  //   switch (e.status) {
  //     case ErrorStatus.NOT_CONNECTED:
  //       error.description = 'not connected';
  //       break;
  //     default:
  //       error.description = 'error server';
  //       break;
  //   }

  //   errors.push(error);

  //   return errors;
  // }

  private log(logs: any) {
    if (!environment.production) {
      console.groupCollapsed(`[${new Date()}] Response -------------`);
      console.log(logs);
      console.groupEnd();
    }
  }
}
