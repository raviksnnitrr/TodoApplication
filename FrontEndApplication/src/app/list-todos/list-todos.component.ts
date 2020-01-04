import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(private id: number, private description: String, private isdone: boolean, private targetDate: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an angular Expert', false, new Date()),
  //   new Todo(3, 'World Tour', false, new Date()),
  //   // { id : 1, description: 'Learn to Dance'},
  //   // { id : 2, description: 'Become an angular Expert'},
  //   // { id : 3, description: 'World Tour'}
  // ];
  message: String;
  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo() {
    this.todoDataService.retrieveAllTodos('Ravi').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('Ravi', id).subscribe(
      resp => {
        console.log(resp);
        this.message = `Deleted Todo ${id} successfully`;
        this.getTodo();
      }
    )
  }
  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }
  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
