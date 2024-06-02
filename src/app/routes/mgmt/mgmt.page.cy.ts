import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementPageComponent } from './mgmt.page'; // Angenommen, der korrekte Exportname ist ManagementPageComponent

describe('MgmtComponent', () => {
  let component: ManagementPageComponent;
  let fixture: ComponentFixture<ManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementPageComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(ManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).to.be.true; // Verwende to.be.true für Cypress
  });
});
