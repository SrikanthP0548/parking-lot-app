import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {
  
  isDetailsFetched = false;
  buttonName ="Get Amount";

  constructor() { }

  ngOnInit() {
  }
  
  getEntryDetails(){
    this.isDetailsFetched = true;
    this.buttonName = "Recieve Amount";
  }
}
