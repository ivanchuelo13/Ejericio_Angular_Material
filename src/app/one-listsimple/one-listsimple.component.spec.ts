import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneListsimpleComponent } from './one-listsimple.component';

describe('OneListsimpleComponent', () => {
  let component: OneListsimpleComponent;
  let fixture: ComponentFixture<OneListsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneListsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneListsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
