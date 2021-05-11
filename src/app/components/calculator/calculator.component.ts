import {Component, OnInit} from '@angular/core';
import {Operations} from '../enums/Operations';
import {HttpClient} from '@angular/common/http';
import {HistoryService} from '../../services/history.service';
import {Calculation} from '../../models/calculation.model';
import {ICalculationResult} from '../../interfaces/ICalculationResult';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public operations = Object.values(Operations);
  selectedOperation: Operations = Operations.ADD;
  a = 0;
  b = 0;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
  }

  ngOnInit(): void {

  }

  calculate(): void {
    this.httpClient.get<ICalculationResult>(`http://localhost:8080/api/calculation/${this.a}/${this.b}/${this.selectedOperation}`)
      .toPromise().then(res => {
      this.history(res.result);
    });
  }

  history(result: number): void {
    const historyCalculation = new Calculation(this.a, this.b, this.selectedOperation, result);
    this.historyService.addHistory(historyCalculation);
  }
}
