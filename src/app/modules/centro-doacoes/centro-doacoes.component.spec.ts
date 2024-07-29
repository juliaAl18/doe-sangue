import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDoacoesComponent } from './centro-doacoes.component';

describe('CentroDoacoesComponent', () => {
  let component: CentroDoacoesComponent;
  let fixture: ComponentFixture<CentroDoacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroDoacoesComponent]
    });
    fixture = TestBed.createComponent(CentroDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
