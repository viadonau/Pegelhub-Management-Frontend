import { AfterContentInit, Component, ContentChildren, EventEmitter, inject, OnInit, Output, QueryList } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { NgForOf } from '@angular/common';
import { NavLinkComponent } from '@shared/ui/nav/link/link.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatNavList, MatIcon, MatListItem, RouterLink, NgForOf],
  templateUrl: './nav.component.html',
})
export class NavComponent implements AfterContentInit, OnInit {
  private router = inject(Router);

  protected activeLinkIndex = 0;

  @Output() protected readonly sidenavClose = new EventEmitter();
  @ContentChildren(NavLinkComponent) links?: QueryList<NavLinkComponent>;

  ngOnInit() {
    this.listenToNavigationChanges();
  }

  ngAfterContentInit() {
    this.setInitialActiveLink();
  }

  protected onSidenavClose(link: string) {
    this.sidenavClose.emit();
    void this.router.navigate([link]);
  }

  /**
   * Sets the active link index to the index of the link that matches the current route.
   */
  private setInitialActiveLink() {
    this.activeLinkIndex = this.links?.toArray().findIndex((link) => this.router.url.startsWith(link.routerLink)) ?? 0;
  }

  /**
   * Listens to navigation changes and sets the active link index to the index of the clicked link.
   */
  private listenToNavigationChanges() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeLinkIndex = this.links?.toArray().findIndex((link) => event.url.startsWith(link.routerLink)) ?? 0;
      });
  }
}
