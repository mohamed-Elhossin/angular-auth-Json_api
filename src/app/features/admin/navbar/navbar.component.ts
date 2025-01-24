import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  Auth!: any;
  constructor(private router: Router) {
    if (localStorage.getItem("admin")) {
      this.Auth = true;
    } else {
      this.Auth = false;
    }
  }
  logout() {
    localStorage.removeItem("admin");
    this.router.navigateByUrl("/admin/login");
  }
}
