import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSportifComponent } from './search-sportif.component';

describe('SearchSportifComponent', () => {
  let component: SearchSportifComponent;
  let fixture: ComponentFixture<SearchSportifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSportifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
