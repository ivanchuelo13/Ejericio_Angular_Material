import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchoTargetaComponent } from './ocho-targeta.component';

describe('OchoTargetaComponent', () => {
  let component: OchoTargetaComponent;
  let fixture: ComponentFixture<OchoTargetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchoTargetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchoTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
