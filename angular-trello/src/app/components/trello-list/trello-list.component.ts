import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from 'src/app/models/taskList.model';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {
  @Input() list: TaskList;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event){
    console.log('sss')
  }
}
