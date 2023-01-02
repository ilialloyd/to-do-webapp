import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/lists-todos/lists-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }


  retrieveAllTodos(username:string) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  deleteTodo(username:string,id:number){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username:string,id:number){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }


  updateTodo(username:string,id:number, todo:Todo){
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
      ,todo)
  }


  createTodo(username:string, todo:Todo){
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/todos/`
      ,todo)
  }

}
