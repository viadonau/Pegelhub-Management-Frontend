import { NavComponent } from '@shared/ui';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NavComponent', () => {
  beforeEach(() => {
    cy.mount(NavComponent, {
      imports: [NoopAnimationsModule],
    });
  });

  it('should create', () => {});
});
