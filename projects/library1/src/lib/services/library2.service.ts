import { Injectable } from '@angular/core';
import { ServiceInterface, Todo } from './serviceinterface.service';

@Injectable({
  providedIn: 'root'
})
export class Library2Service implements ServiceInterface {
  getTodos(): Todo[] {
    const todos: Todo[] = [
      {
        title: 'Type2',
      }
    ];

    return todos;
  }
}
