import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { error } from 'console';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  data:any;
  constructor(private apiService:ApiService){

  }
  ngOnInit(){
    this.apiService.getData().subscribe((response) => {this.data=response;},
      (error) => {
        console.error('Error fetching data', error);
      }
    )
  }

// -----------------below code hardcoded values-------

  tasks=[
    { id:1, name:'Task1'},
    { id:2, name:'Task2'},
    { id:3, name:'Task3'}];
  newTaskName: any;

    addTask(){
      const newTask={
        id:this.tasks.length+1,
        name:this.newTaskName
      };
      this.tasks.push(newTask);
      this.newTaskName='';
    }

  editTaskName(task:any){
    const newName=prompt('Enter new task name:',task.name);
    if(newName){
      task.name=newName;
    }
  }

}
