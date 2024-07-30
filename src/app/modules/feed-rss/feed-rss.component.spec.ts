import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedRssComponent } from './feed-rss.component';

describe('FeedRssComponent', () => {
  let component: FeedRssComponent;
  let fixture: ComponentFixture<FeedRssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedRssComponent]
    });
    fixture = TestBed.createComponent(FeedRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
