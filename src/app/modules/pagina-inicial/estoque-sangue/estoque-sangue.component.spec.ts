import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueSangueComponent } from './estoque-sangue.component';

describe('EstoqueSangueComponent', () => {
  let component: EstoqueSangueComponent;
  let fixture: ComponentFixture<EstoqueSangueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueSangueComponent]
    });
    fixture = TestBed.createComponent(EstoqueSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
