import { HomePageComponent } from './home.page';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomePageComponent', () => {
  beforeEach(() => {
    cy.mount(HomePageComponent, {
      imports: [NoopAnimationsModule],
    });
  });

  it('should create', () => {});
});
