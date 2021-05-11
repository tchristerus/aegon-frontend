import {Calculation} from './calculation.model';
import {Operations} from '../components/enums/Operations';

describe('Calculation', () => {
  it('should create an instance', () => {
    expect(new Calculation(1, 1, Operations.ADD, 2)).toBeTruthy();
  });
});
