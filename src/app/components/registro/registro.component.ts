import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {
    fullname: '',
    functions: ''
}
  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  registro(){
    console.log(this.user)
    this.authService.registro(this.user)
      .subscribe(
        res =>{
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
  }
}
