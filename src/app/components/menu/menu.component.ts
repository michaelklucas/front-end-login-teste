import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private tokenExpiryTime = 1800000;
  constructor(private router: Router) { }

  ngOnInit() {
    this.startTokenTimer();
  }

  sair() {
    this.clearToken();
    this.router.navigate(['/login']);
  }

  private startTokenTimer() {
    const tokenExpiryTimer = setTimeout(() => {
      this.clearToken();
      this.router.navigate(['/login']);
    }, this.tokenExpiryTime);
  }

  private clearToken() {
    localStorage.removeItem('token');
  }
}
