import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard.page'; // Angenommen, der korrekte Exportname ist DashboardPageComponent

describe('DashboardComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPageComponent] // Hier declarations statt imports
    })
        .compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).to.be.true; // Verwende to.be.true für Cypress
  });
});
