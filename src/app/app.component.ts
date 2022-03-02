import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Todo[] = []; //
  newTodo : string;
  
  saveTodo() {
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = ''; //
    }else{
      alert('Please enter a new Todo')
    }
  }

  doneTodo(id : number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  
  removeTodo(id : number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  updateTodo(id : number){
    this.todos[id]
  }
}
