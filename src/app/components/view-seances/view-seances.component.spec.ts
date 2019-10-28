import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeancesComponent } from './view-seances.component';

describe('ViewSeancesComponent', () => {
  let component: ViewSeancesComponent;
  let fixture: ComponentFixture<ViewSeancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSeancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
