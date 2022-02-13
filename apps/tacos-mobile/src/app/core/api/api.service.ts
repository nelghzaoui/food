import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { HttpMethod } from './models/http-method.enum';
import { LoadingTool } from '../ui/loading.tool';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient, private readonly loadingTool: LoadingTool) {}

  get() {
    this.httpClient.get(`${environment.endpoint}/foods/`).subscribe((r) => console.log(r));
    // this.request(HttpMethod.GET, 'food', undefined, false);
  }

  // private request<T>(method: HttpMethod, service: string, body = {}, showLoading: boolean): Promise<T> {
  //   return new Promise((resolve, reject) => {
  //     if (showLoading) this.loadingTool.present();

  //     const request = { url: `${environment.endpoint}/${service}/`, body, method };
  //     // const request = new Request(service, parameters, {}, showLoading);

  //     this.httpClient
  //       .request(request as any)
  //       .pipe(take(1))
  //       .subscribe(
  //         (response) => {
  //           console.log('response', response);
  //           // resolve(response);
  //         }
  //         // (e: HttpResponse) => reject(this.handleError(e))
  //       );
  //   });
  // }

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

  private log(message: string, logs: Request): void {
    if (!environment.production) {
      console.groupCollapsed(`[${new Date()}] ${message} -------------`);
      console.log(logs);
      console.groupEnd();
    }
  }
}
