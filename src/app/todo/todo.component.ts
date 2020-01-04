import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false,new Date());
    if(this.id!=-1){
    this.todoDataService.retrieveTodoById('Ravi', this.id).subscribe(
      resp=>{
      this.todo = resp;
      }
    )
  }
  }
  saveTodo(){
    if(this.id == -1){
     this.todoDataService.createTodo('Ravi',this.todo).subscribe(
       resp=>{
         console.log(resp);
         this.router.navigate(['todos']);
       }
     )
    }else{
    this.todoDataService.updateTodo('Ravi', this.id, this.todo).subscribe(
      resp=>{
        console.log(resp);
        this.router.navigate(['todos']);
      }
    )
  }
  }

}
