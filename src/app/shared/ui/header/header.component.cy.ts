import { HeaderComponent } from '@shared/ui';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from '../../../app.routes';

describe('HeaderComponent', () => {
  beforeEach(() => {
    cy.mount(HeaderComponent, {
      imports: [NoopAnimationsModule],
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  it('should create', () => {});
});
