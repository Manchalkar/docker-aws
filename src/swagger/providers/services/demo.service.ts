/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vmDemo } from '../models/vm-demo';

@Injectable({
  providedIn: 'root',
})
export class DemoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDemoGetGet
   */
  static readonly ApiDemoGetGetPath = '/api/Demo/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDemoGetGet()` instead.
   *
   * This method doesn't expect any response body
   */
  apiDemoGetGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DemoService.ApiDemoGetGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDemoGetGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiDemoGetGet(params?: {

  }): Observable<void> {

    return this.apiDemoGetGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDemoPostPost
   */
  static readonly ApiDemoPostPostPath = '/api/Demo/Post';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDemoPostPost$Json()` instead.
   *
   * This method sends `application/json-patch+json` and handles response body of type `application/json-patch+json`
   */
  apiDemoPostPost$Json$Response(params?: {

    body?: vmDemo
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DemoService.ApiDemoPostPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json-patch+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDemoPostPost$Json$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles response body of type `application/json-patch+json`
   */
  apiDemoPostPost$Json(params?: {

    body?: vmDemo
  }): Observable<void> {

    return this.apiDemoPostPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
