import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenRadiusComponent } from './seven-radius.component';

describe('SevenRadiusComponent', () => {
  let component: SevenRadiusComponent;
  let fixture: ComponentFixture<SevenRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
