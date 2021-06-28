import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  tasks=[ ];
  data = "id";
  

  constructor(private tasksService : TaskService) { }
  ngOnInit(){
    this.tasksService.getTask()
      .subscribe(
        res => { 
          this.tasks = res
          console.log(this.tasks)
        },  
        err => console.log(err)
      )
  }

  

}
