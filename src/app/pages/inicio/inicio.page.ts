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
    },
    {
      icon: 'document-text-outline',
      name: 'Cartas',
      redirectTo: '/card'      
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'      
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/date-time'      
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'      
    },
    {
      icon: 'grid',
      name: 'Grid-Rows',
      redirectTo: '/grid'      
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