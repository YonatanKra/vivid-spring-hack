import { Component } from '@angular/core';

@Component({
  selector: 'vivid-spring-hack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems = [
    {
      icon: 'preferences-line',
      title: 'Applications',
      route: '/'
    },
    {
      icon: 'pie-chart-line',
      title: 'Analytics',
      route: '/analytics'
    },
    {
      icon: 'wallet-line',
      title: 'Profile',
      route: '/profile'
    },
  ];
}
