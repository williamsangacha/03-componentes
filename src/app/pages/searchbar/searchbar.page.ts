import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albunes : any[] =[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getalbums()
    .subscribe(data=>{
      console.log(data);
      this.albunes=data;
    });
  }

  buscar(event){
    console.log(event);
  }



}
