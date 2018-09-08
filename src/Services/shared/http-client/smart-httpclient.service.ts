import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { finalize } from 'rxjs/operators'
import { LoaderService } from '../loader.service';
 
export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}


export function applicationHttpClientCreator(http: HttpClient,loaderService: LoaderService) {
  return new SmartHttpClient(http,loaderService);
}

@Injectable()
export class SmartHttpClient {

  private api = 'http://astroliteapi.azurewebsites.net/api/';
  // private api = 'https://www.igniteui.com/api/';

  // Extending the HttpClient through the Angular DI.
  public constructor(public http: HttpClient,private loaderService: LoaderService) {
    // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
    // for ex. this.httpClient.http.get(...)
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(this.api + endPoint, options);
  }
  // public GetPayCodes<T>(): Observable<T> {
  //   return this.http.get<T>(this.api + "Sales/GetPayCodes");
  // }
  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
   this.showLoader();
    return this.http.post<T>(this.api + endPoint, params, options).pipe( finalize(()=>{
      this.hideLoader();
    }))
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {

    return this.http.put<T>(this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(this.api + endPoint, options);
  }
  getTimezone(lat, long) {  
    var apiKey = 'AIzaSyD68pTd0CmqTXSqPHFpLrPWkiClqPBIpLQ'
    //https://maps.googleapis.com/maps/api/timezone/json?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyD68pTd0CmqTXSqPHFpLrPWkiClqPBIpLQ
    var url = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + lat + ',' + long + '&timestamp=1458000000&key=' + apiKey 
    // var response = GoogleAppsScript.URL_Fetch.UrlFetchApp.fetch(url);
    // var data = JSON.parse(response.getContentText());
    // return data["timeZoneName"];
    return this.http.get(url);
  }


  private showLoader(): void {
    this.loaderService.show();
    console.log('shown');
}
private hideLoader(): void {
  this.loaderService.hide();
  console.log('hided');
}
}


/**https://medium.com/@admin_87321/extending-angular-httpclient-6b33a7a1a4d0 */