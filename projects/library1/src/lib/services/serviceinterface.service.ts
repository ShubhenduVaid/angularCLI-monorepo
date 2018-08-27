import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceInterface {
  abstract getTodos(): Todo[];
}
