import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'barcode-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'      
    },
    {
      icon: 'sunny-outline',
      name: 'Alert',
      redirectTo: '/alert'      
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      redirectTo: '/avatar'      
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y Router',
      redirectTo: '/botones'      
    }
    ,
    {
      icon: 'document-text-outline',
      name: 'Cartas',
      redirectTo: '/card'      
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}