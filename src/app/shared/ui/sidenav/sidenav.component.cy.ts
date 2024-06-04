import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from '@shared/ui';
import { routes } from '../../../app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';

describe('SidenavComponent', () => {
  beforeEach(() => {
    cy.mount(SidenavComponent, {
      imports: [NoopAnimationsModule],
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  it('should create', () => {});
});
