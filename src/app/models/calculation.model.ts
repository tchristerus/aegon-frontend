import {Operations} from '../components/enums/Operations';

export class Calculation {
  public a: number;
  public b: number;
  public operation: Operations;
  public result: number;

  constructor(a: number, b: number, operation: Operations, result: number) {
    this.a = a;
    this.b = b;
    this.operation = operation;
    this.result = result;
  }
}
