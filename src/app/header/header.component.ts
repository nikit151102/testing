import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Page 1', routerLink: '/page1' },
      { label: 'Page 2', routerLink: '/page2' },
      { label: 'Page 3' },
      { label: 'Page 4' }
    ];

    this.activeItem = this.items[0];
  }

  onTabChange(event: any) {
    this.router.navigate([event.item.routerLink]);
  }
}