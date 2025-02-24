import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers: [ApiService],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  users: any[]=[];
  error: string|null =null;

  constructor(private apiService:ApiService){

  }
  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (data) => {
        this.users = data;
        this.tasks=this.users.map(user => user.name);

      },
      error: (error) => {
        this.error = 'Failed to fetch data';
        console.error('Error fetching data', error);
      }
    });
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
