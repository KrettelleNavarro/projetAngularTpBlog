import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopListItemComponent } from './post-list-item.component';

describe('PopListItemComponent', () => {
  let component: PopListItemComponent;
  let fixture: ComponentFixture<PopListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
