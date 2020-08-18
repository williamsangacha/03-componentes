import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popOverCtrl : PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(){
    const popOver = await this.popOverCtrl.create({
      component: PopinfoComponent,
    });

    await popOver.present();
  }
}
