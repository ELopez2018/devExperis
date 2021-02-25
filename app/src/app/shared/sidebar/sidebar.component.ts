import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthFacadeService } from '@root/auth/login/auth.facade.service';
import { Subscription } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  subs: Subscription = new Subscription();
  user: any;
  clases="collapse"
  clasesUser="collapse"
  constructor(private authfacade: AuthFacadeService) { }
  ngOnInit(): void {
    this.obtenerUsuario()
  }
  obtenerUsuario() {

  }
  logout(): void {
    this.authfacade.logout();
  }
collapse() {

  this.clases= this.clases =="" ? "collapse" : "";
}
collapseUser() {
  this.clasesUser= this.clasesUser =="" ? "collapse" : "";
}
}
