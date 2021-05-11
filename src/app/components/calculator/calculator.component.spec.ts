import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {HistoryComponent} from '../history/history.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [CalculatorComponent, HistoryComponent]
    })
      .compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input num 1 should be binded to the value', () => {
    component.a = 4;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let newValue = parseInt((document.getElementById('num1') as HTMLInputElement).value);
      expect(newValue).toBe(4);
    });
  });

  it('Input num 2 should be binded to the value', () => {
    component.b = 4;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let newValue = parseInt((document.getElementById('num2') as HTMLInputElement).value);
      expect(newValue).toBe(4);
    });
  });
});
