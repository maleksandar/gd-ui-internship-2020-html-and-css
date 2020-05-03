import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private tasks;

  constructor() {
    let data = localStorage.getItem('data');
    this.tasks = data ? JSON.parse(data) : {};
    if (!this.tasks['TODO']) {
      this.tasks['TODO'] = [];
    }
    if (!this.tasks['INPROGRESS']) {
      this.tasks['INPROGRESS'] = [];
    }
    if (!this.tasks['DONE']) {
      this.tasks['DONE'] = [];
    }
  }

  public storeData() {
    localStorage.setItem('data', JSON.stringify(this.tasks));
  }

  public getData() {
    return this.tasks;
  }
}
