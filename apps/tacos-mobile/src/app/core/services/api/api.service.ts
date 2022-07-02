import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Platform } from '@ionic/angular';
import { Observable, Subscriber } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AlertTool } from '../ui/alert.tool';
import { LoadingTool } from '../ui/loading.tool';
import { HttpMethod } from './models/http-method.enum';
import { ErrorMessage, ErrorStatus } from './models/error-message.interface';

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

  private request<T>(method: HttpMethod, service: string, parameters?: T): Observable<T> {
    return new Observable<T>((observer: Subscriber<T>) => {
      this.loadingTool.present().then(() => {
        this.httpClient.request<T>(method, `${environment.endpoint}/${service}/`, parameters).subscribe({
          next: (v: T) => {
            this.log(v);
            observer.next(v);
          },
          error: (e: HttpErrorResponse) => observer.error(this.handleError(e)),
          complete: () => observer.complete()
        });
        this.loadingTool.dismiss();
      });
    });
  }

  private async handleError(e: HttpErrorResponse): Promise<ErrorMessage[]> {
    const errors: ErrorMessage[] = [];
    const error: ErrorMessage = {
      id: e.url as string,
      blockingCode: e.error,
      description: e.message,
      severityType: e.type.toString(),
      status: e.status
    };

    const connectionType = (await Network.getStatus()).connectionType;
    if (this.platform.is('android') && connectionType === 'none') {
      error.description = 'not connected';
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
