import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


@Component({
  selector: 'app-lists-todos',
  templateUrl: './lists-todos.component.html',
  styleUrls: ['./lists-todos.component.css']
})


export class ListsTodosComponent implements OnInit {

  todos: Todo[] = [];

  message:string='';
  // new Todo(1, 'Learn to dance', false, new Date()),
  // new Todo(2, 'Become Blue belt in bjj', false, new Date()),
  // new Todo(3, 'Visit India', false, new Date())



  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

   getTodos() {
    this.todoService.retrieveAllTodos('ilham').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('ilham',id).subscribe(
      response =>{
        console.log(response)
        this.message=`Delete of Todo ${id} Successfull!`;
        this.getTodos();
      }
    )
  }


  updateTodo(id: number){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id]);//when you click update it will open new page with exact todo id in the link
    
  }


  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}

//new Todo class and in constructor we define the types
export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}