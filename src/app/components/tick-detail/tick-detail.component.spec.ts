import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickDetailComponent } from './tick-detail.component';

describe('TickDetailComponent', () => {
  let component: TickDetailComponent;
  let fixture: ComponentFixture<TickDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
