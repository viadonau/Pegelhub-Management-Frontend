import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected title = 'Pegelhub Management Frontend';

  @Output() protected readonly sidenavToggle = new EventEmitter();

  protected onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
