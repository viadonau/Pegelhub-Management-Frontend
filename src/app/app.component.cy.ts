import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

describe('App Component', () => {
  beforeEach(() => {
    cy.mount(AppComponent, {
      imports: [NoopAnimationsModule],
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  it('should create', () => {});
});
