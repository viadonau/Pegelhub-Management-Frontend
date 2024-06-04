import { DashboardPageComponent } from './dashboard.page';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardPageComponent', () => {
  beforeEach(() => {
    cy.mount(DashboardPageComponent, {
      imports: [NoopAnimationsModule],
      providers: [provideHttpClient(withFetch())],
    });
  });

  it('should create', () => {});
});
