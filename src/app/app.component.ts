import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./task-list/task-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
