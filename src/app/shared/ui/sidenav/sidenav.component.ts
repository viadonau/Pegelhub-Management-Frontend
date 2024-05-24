import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '@shared/ui/nav/nav.component';
import { HeaderComponent } from '@shared/ui/header/header.component';
import { NavLinkComponent } from '@shared/ui/nav/link/link.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavContainer, MatSidenav, MatSidenavContent, RouterOutlet, NavComponent, HeaderComponent, NavLinkComponent],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {}
