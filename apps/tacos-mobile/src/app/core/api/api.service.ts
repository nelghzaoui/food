import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Platform } from '@ionic/angular';
import { Observable, Subscriber, take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AlertTool } from '../ui/alert.tool';
import { LoadingTool } from '../ui/loading.tool';
import { ErrorStatus } from './models/error-status.enum';
import { HttpMethod } from './models/http-method.enum';
import { MessageType } from './models/message-type.class';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly alertTool: AlertTool,
    private readonly loadingTool: LoadingTool,
    private readonly platform: Platform
  ) {}

  get<T>(service: string, parameters?: T): Observable<T> {
    return this.request<T>(HttpMethod.GET, service, parameters);
  }

  post<T>(service: string, parameters?: T): Observable<T> {
    return this.request<T>(HttpMethod.POST, service, parameters);
  }

  put<T>(service: string, parameters?: T): Observable<T> {
    return this.request<T>(HttpMethod.PUT, service, parameters);
  }

  delete<T>(service: string, parameters?: T): Observable<T> {
    return this.request<T>(HttpMethod.DELETE, service, parameters);
  }

  private request<T>(method: HttpMethod, service: string, parameters = {}): Observable<T> {
    return new Observable<T>((observer: Subscriber<T>) => {
      this.loadingTool.present().then(() => {
        this.httpClient
          .request<T>(method, `${environment.endpoint}/${service}/`, parameters)
          .pipe(take(1))
          .subscribe({
            next: (v: T) => {
              this.log(v);
              observer.next(v);
            },
            error: (e) => observer.error(this.handleError(e)),
            complete: () => observer.complete()
          });
        this.loadingTool.dismiss();
      });
    });
  }

  private async handleError(e: any): Promise<MessageType[]> {
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

    this.alertTool.presentError(errors);

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
