import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Calculation} from '../models/calculation.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpService: HttpService) {
  }

  public getHistory(): Promise<Calculation[]> {
    return this.httpService.get<Calculation[]>('/calculation');
  }
}
