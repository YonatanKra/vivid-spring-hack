import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vivid-spring-hack-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input()
  menuItems: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
