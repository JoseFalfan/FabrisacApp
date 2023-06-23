import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Guias', url: '/activeguides', icon: 'newspaper' },
    { title: 'Stock', url: '/rolls', icon: 'disc' },
    { title: 'Personal', url: '/cutters', icon: 'people' },
  ];
  public labels = [];
  constructor() {}
}
