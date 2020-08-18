import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Acuaman', 'Superman', 'Batman','Flash','Mujer Maravilla']

  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    // console.log(event);

    const itemMover = this.personajes.splice(event.detail.from, 1) [0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
  }

  onClick(){
    console.log(this.personajes);
  }

}