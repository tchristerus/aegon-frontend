import {Component, OnInit} from '@angular/core';
import {Operations} from '../../models/enums/Operations';
import {HistoryService} from '../../services/history.service';
import {Calculation} from '../../models/calculation.model';
import {ICalculationResult} from '../../interfaces/ICalculationResult';
import {ICalculationRequest} from '../../interfaces/ICalculationRequest';
import {HttpService} from '../../services/http.service';

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

  constructor(private httpService: HttpService, private historyService: HistoryService) {
  }

  ngOnInit(): void {

  }

  calculate(): void {
    const calculationData: ICalculationRequest = {num1: this.a, num2: this.b};
    this.httpService.post<ICalculationResult>(`/calculation/${this.selectedOperation}`, JSON.stringify(calculationData))
      .then(res => {
        this.history(res.result);
      }).catch(res => {
      alert(res.error.error);
    });
  }

  history(result: number): void {
    const historyCalculation = new Calculation(this.a, this.b, this.selectedOperation, result);
    this.historyService.addHistory(historyCalculation);
  }
}
