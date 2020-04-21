import { Component, OnInit } from '@angular/core';
import { TrelloStorageService } from '../../services/trello-storage.service';
import { TaskList } from 'src/app/models/taskList.model';
@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss'],
  providers: [TrelloStorageService],
})
export class TrelloBoardComponent implements OnInit {
  lists: {[path:string]: TaskList};

  constructor(private storageService: TrelloStorageService) { }

  ngOnInit(): void {
    this.lists = this.storageService.getLists();
  }

}
