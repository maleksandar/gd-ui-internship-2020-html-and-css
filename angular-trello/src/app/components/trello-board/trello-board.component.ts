import { Component, OnInit } from '@angular/core';
import { TrelloService } from '../../services/trello.service';
import { TaskList } from 'src/app/models/taskList.model';
@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {
  lists: {[path:string]: TaskList};

  constructor(private storageService: TrelloService) { }

  ngOnInit(): void {
    this.lists = this.storageService.get('lists');
  }

}
