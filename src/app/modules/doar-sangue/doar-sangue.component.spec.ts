import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarSangueComponent } from './doar-sangue.component';

describe('DoarSangueComponent', () => {
  let component: DoarSangueComponent;
  let fixture: ComponentFixture<DoarSangueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoarSangueComponent]
    });
    fixture = TestBed.createComponent(DoarSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
