import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnasesComponent } from './gymnases.component';

describe('GymnasesComponent', () => {
  let component: GymnasesComponent;
  let fixture: ComponentFixture<GymnasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymnasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
