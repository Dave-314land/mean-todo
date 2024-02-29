import { Injectable } from '@angular/core'
import { Task } from './task.model'

@Injectable({providedIn: 'root'})
export class TaskDataService {

    tasks: Task[] = [
        new Task('03-Jan-24', 'Walk Dog'),
        new Task('04-Jan-24', 'Sleep')
    ]
}