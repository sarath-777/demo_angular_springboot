import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  welcomeMessage='Welcome to the Home Page'
  name=''

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    console.log(this.welcomeMessage)
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']

  }
}
