import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSeanceComponent } from './search-seance.component';

describe('SearchSeanceComponent', () => {
  let component: SearchSeanceComponent;
  let fixture: ComponentFixture<SearchSeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
