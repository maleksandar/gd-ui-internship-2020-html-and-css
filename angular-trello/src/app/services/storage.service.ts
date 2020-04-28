import { Injectable } from '@angular/core';
import { defaultLists, defaultTasks } from './default-storage';
const LIST_KEYS = 'listKeys';
const TASK_KEYS = 'taskKeys';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private listKeys: string[];
  private taskKeys: string[];
 
  constructor() {
    this.listKeys = JSON.parse(localStorage.getItem(LIST_KEYS)) || [];
    this.taskKeys = JSON.parse(localStorage.getItem(TASK_KEYS)) || [];
    if(this.listKeys.length === 0) {
      this.importDefaults()
    }
   }

   get(keys: string) {
    const items = {}
    if (this[keys]) {
      this[keys].forEach(key => {
        items[key] = JSON.parse(localStorage.getItem(key));
      })
      return items;
    }
   }

   post(item: any, keys: string) {
     localStorage.setItem(item.id, JSON.stringify(item));
     this[keys].push(item.id);
     this.updateKeys(keys);
   }

   put(item: any) {
    localStorage.setItem(item.id, JSON.stringify(item));
   }

   remove(item: any, KEYS: string) {
    localStorage.removeItem(item.id);
    this[KEYS] = this[KEYS].filter(key => key !== item.id);
    this.updateKeys(KEYS);
   }

   updateKeys(KEYS: string) {
    localStorage.setItem(KEYS, JSON.stringify(this[KEYS]));
   }

   importDefaults() {
    for(let list of defaultLists) {
      this.post(list, 'listKeys');
    }
    for(let task of defaultTasks) {
      this.post(task, 'taskKeys');
    }
   }
}
