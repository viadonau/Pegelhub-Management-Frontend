import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  template: '',
})
export class NavLinkComponent {
  /**
   * The link to which the user will be navigated when the link is clicked.
   */
  @Input({ required: true }) routerLink!: string;

  /**
   * The label that will be displayed after the icon.
   */
  @Input({ required: true }) label!: string;

  /**
   * The icon that will be displayed before the label.
   */
  @Input({ required: true }) icon!: string;
}
