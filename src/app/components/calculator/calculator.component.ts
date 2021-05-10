import {Component, OnInit} from '@angular/core';
import {Operations} from '../enums/Operations';
import {HttpClient} from '@angular/common/http';
import {Calculation} from '../../models/calculation.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public operations = Object.values(Operations);
  selectedOperation: Operations = Operations.ADD;
  a = '0';
  b = '0';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {

  }

  calculate(): void {
    this.httpClient.get(`http://localhost:8080/api/calculation/${this.a}/${this.b}/${this.selectedOperation}`).toPromise().then(res => {
      this.history();
    });
  }

  history(): void {
    this.httpClient.get<Calculation[]>('http://localhost:8080/api/calculation').subscribe(res => {
      console.table(res);
    });
  }
}
