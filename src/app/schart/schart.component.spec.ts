import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchartComponent } from './schart.component';

describe('SchartComponent', () => {
  let component: SchartComponent;
  let fixture: ComponentFixture<SchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
