import {Operations} from '../components/enums/Operations';

export class Calculation {
  public num1: number;
  public num2: number;
  public operation: Operations;
  public result: number;

  constructor(num1: number, num2: number, operation: Operations, result: number) {
    this.num1 = num1;
    this.num2 = num2;
    this.operation = operation;
    this.result = result;
  }
}
