import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private tasks;

  constructor() { 
    let data = window.localStorage.getItem('data');
    this.tasks = (data ? JSON.parse(data) : {})
  
    if(!this.tasks["TODO"]) {
      this.tasks["TODO"] = []
    }
    if(!this.tasks["IN PROGRESS"]) {
      this.tasks["IN PROGRESS"] = []
    }
    if(!this.tasks["DONE"]) {
      this.tasks["DONE"] = []
    }   
  }

  public getData() {
    return this.tasks;
  }

  public storeData() {
    localStorage.setItem('data', JSON.stringify(this.tasks));
  }
}
