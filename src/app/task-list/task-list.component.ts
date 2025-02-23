import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { error } from 'console';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  data:any=[];
  
  constructor(private apiService:ApiService){

  }
  ngOnInit(){
    this.apiService.getData().subscribe((response) => {this.data=response;},
      (error) => {
        console.error('Error fetching data', error);
      }
    )
  }

  task: string = ''; 
  tasks:string[]=[];
  
  addTask(){
    if(this.task.trim()){
      
      this.tasks.push(this.task);
    }
  }

    

  editTaskName(task:any){
    const newName=prompt('Enter new task name:',task);
    if(newName){
      const taskIndex = this.tasks.indexOf(task);
      if(taskIndex!==-1){
        this.tasks[taskIndex]=newName;

      }
    } 
  }

}
