import { Component } from '@angular/core';

import { TaskListComponent } from "./task-list/task-list.component";
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
