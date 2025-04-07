import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks = [
    { sn: 1, name: 'Aravind', title: 'Login form', desc: 'Sample login form using html and css', start: 'Jan.1,2025,midnight', end: 'Jan.30,2025,midnight' },
    { sn: 2, name: 'Arun', title: 'Shipment details form', desc: 'Sample shipment details form using html and css', start: 'Jan.1,2025,midnight', end: 'Jan.30,2025,midnight' },
    { sn: 3, name: 'Anu', title: 'Login form', desc: 'Sample login form using html and css', start: 'Jan.1,2025,midnight', end: 'Jan.30,2025,midnight' },
    { sn: 4, name: 'Anish', title: 'Shipment details form', desc: 'Sample shipment details form using html and css', start: 'Jan.1,2025,midnight', end: 'Jan.30,2025,midnight' },
    { sn: 5, name: 'Madhu', title: 'Login form', desc: 'Sample login form using html and css', start: 'Jan.1,2025,midnight', end: 'Jan.30,2025,midnight' },
  ];

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
