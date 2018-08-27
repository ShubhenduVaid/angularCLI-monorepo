import { Component, OnInit } from '@angular/core';
import { ServiceInterface, Todo } from '../services/serviceinterface.service';

@Component({
  selector: 'lib-component',
  templateUrl: './lib.component.html',
})
export class LibraryComponent implements OnInit {
  todos: Todo[];
  constructor(private myService: ServiceInterface) { }

  ngOnInit() {
    this.todos = this.myService.getTodos();
  }

}
