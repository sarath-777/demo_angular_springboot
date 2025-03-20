import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit{
  errorMessage ='Something wrong happened, Contact Support'
  constructor(){}
  
  
  ngOnInit(): void {
    
  }

}
