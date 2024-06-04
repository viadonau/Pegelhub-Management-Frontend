import { ManagementPageComponent } from './mgmt.page';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ManagementPageComponent', () => {
  beforeEach(() => {
    cy.mount(ManagementPageComponent, {
      imports: [NoopAnimationsModule],
    });
  });

  it('should create', () => {});
});
