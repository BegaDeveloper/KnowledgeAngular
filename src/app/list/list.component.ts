import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  firstList: any;
  secondList: any;

  constructor(private list: ListServiceService) {}

  ngOnInit(): void {
    this.firstList = this.list.listOne();
    this.secondList = this.list.listTwo();
  }
}
