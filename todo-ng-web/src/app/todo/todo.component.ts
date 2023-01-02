import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../lists-todos/lists-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date()); // to prevent direct empty upload
    if (this.id != -1) {// when it is new todo we dont need to call retrieveTodo
      this.todoService.retrieveTodo('lighteducation', this.id).subscribe(
        data => this.todo = data
      )
    }
  }


  saveTodo() {
    if (this.id == -1) {
      //create todo
      this.todoService.createTodo('lighteducation', this.todo)
        .subscribe(
          data => {
            console.log(data)
            //back to todos list after update
            this.router.navigate(['todos'])
          }
        )
    } else {
      this.todoService.updateTodo('lighteducation', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            //back to todos list after update
            this.router.navigate(['todos'])
          }
        )
    }
  }

}
