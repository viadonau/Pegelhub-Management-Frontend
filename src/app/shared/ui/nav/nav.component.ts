import { Component, EventEmitter, Output } from '@angular/core';
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatNavList,
    MatIcon,
    MatListItem,
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Output() protected readonly sidenavClose = new EventEmitter();

  protected onSidenavClose() {
    this.sidenavClose.emit();
  }
}
