import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  public get<T>(endpoint: string): Promise<T> {
    return this.http.get<T>(this.baseUrl + endpoint).toPromise();
  }
}
