import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportifsListComponent } from './sportifs-list.component';

describe('SportifsListComponent', () => {
  let component: SportifsListComponent;
  let fixture: ComponentFixture<SportifsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportifsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportifsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
