import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ViewresultComponent } from './viewresult/viewresult.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskComponent,ViewresultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managetasksform';
}
