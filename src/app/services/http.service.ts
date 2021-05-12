import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:8080/api';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};


  constructor(private http: HttpClient) {

  }

  public get<T>(endpoint: string): Promise<T> {
    return this.http.get<T>(this.baseUrl + endpoint, this.options).toPromise();
  }

  public post<T>(endpoint: string, body: any): Promise<T> {
    return this.http.post<T>(this.baseUrl + endpoint, body, this.options).toPromise();
  }

}
