import { Component, OnInit } from '@angular/core';
import { TrelloCardService } from '../../services/trello-card.service';
import { TaskList } from 'src/app/models/taskList.model';
@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {
  lists: {[path:string]: TaskList};

  constructor(private trelloCardService: TrelloCardService) { }

  ngOnInit(): void {
    this.lists = this.trelloCardService.get('lists');
  }

}
