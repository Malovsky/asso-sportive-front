import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportifsComponent } from './sportifs.component';

describe('SportifsComponent', () => {
  let component: SportifsComponent;
  let fixture: ComponentFixture<SportifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
