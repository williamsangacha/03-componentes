import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  procentaje : number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  CambioRango(event){
    this.procentaje = (event.detail.value)/100;
    console.log(event.detail.value);
  }
}
