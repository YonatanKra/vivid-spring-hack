import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vivid-spring-hack-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  applications: any[] = [
    {
      title: 'App Name',
      subtitle: '20 May 2022',
      test: 'This is a great app!',
      icon: 'chat-line',
    },
    {
      title: 'App Name',
      subtitle: '21 May 2022',
      test: 'This is a great app!',
      icon: 'chat-line',
    },
    {
      title: 'App Name',
      subtitle: '22 May 2022',
      test: 'This is a great app!',
      icon: 'chat-line',
    },
    {
      title: 'App Name',
      subtitle: '23 May 2022',
      test: 'This is a great app!',
      icon: 'chat-line',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
