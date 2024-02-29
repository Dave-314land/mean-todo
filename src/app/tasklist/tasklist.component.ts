import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../shared/task-data.component';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit {
  tasks: Task[];
  constructor(private taskDataService: TaskDataService){}
  ngOnInit(): void {
    this.tasks = this.taskDataService.tasks;
  }
}
