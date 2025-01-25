import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  
  bandera:boolean;
  constructor(){
    this.bandera = true;
  };
  
  ngOnInit(): void {
    
  };

  click(){
    this.bandera = !this.bandera;
  }
  

}
