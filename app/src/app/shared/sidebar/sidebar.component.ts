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
  storage = environment.STORAGE;

  constructor(private authfacade: AuthFacadeService) { }
  ngOnInit(): void {
    this.obtenerUsuario()
  }
  obtenerUsuario() {
    this.authfacade.getCurrentUser$().subscribe(user => this.user = user )
  }
  logout(): void {
    this.authfacade.logout();
  }
collapse() {
  console.log('object');
  this.clases= this.clases =="" ? "collapse" : "";
}
collapseUser() {
  this.clasesUser= this.clasesUser =="" ? "collapse" : "";
}
}
