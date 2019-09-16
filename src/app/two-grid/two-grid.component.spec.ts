import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoGridComponent } from './two-grid.component';

describe('TwoGridComponent', () => {
  let component: TwoGridComponent;
  let fixture: ComponentFixture<TwoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
