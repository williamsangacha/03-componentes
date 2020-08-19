import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  superHeroes : Observable<any>;
  valorSegmento ='';
  
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.superHeroes=this.dataService.getHeroes();

  }

  ionViewWillEnter(){
    this.segment.value='todos';
  } 
  
  segmentChanged(event){
    this.valorSegmento = event.detail.value;
    
    if(event.detail.value==='todos'){
      console.log(event.detail.value);
      this.valorSegmento = '';
    }
  }

}
