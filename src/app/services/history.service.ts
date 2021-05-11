import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Calculation} from '../models/calculation.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private readonly _historySource = new BehaviorSubject<Calculation[]>([]);
  readonly history$ = this._historySource.asObservable();

  constructor(private httpService: HttpService) {
    this.loadInitialHistory();
  }

  private get history(): Calculation[] {
    return this._historySource.getValue();
  }

  private set history(calculations: Calculation[]) {
    this._historySource.next(calculations);
  }

  public loadInitialHistory(): void {
    this.httpService.get<Calculation[]>('/calculation').then(calculations => {
      this.history = calculations;
    });
  }

  public addHistory(calculation: Calculation): void {
    this.history = [...this.history, calculation];
  }
}
