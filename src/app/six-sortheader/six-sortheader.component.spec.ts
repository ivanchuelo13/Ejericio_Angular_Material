import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixSortheaderComponent } from './six-sortheader.component';

describe('SixSortheaderComponent', () => {
  let component: SixSortheaderComponent;
  let fixture: ComponentFixture<SixSortheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixSortheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixSortheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
