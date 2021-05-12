import {Component, OnInit} from '@angular/core';
import {Calculation} from '../../models/calculation.model';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: Calculation[];

  constructor(public historyService: HistoryService) {
    this.history = [];
  }

  ngOnInit(): void {

  }
}
