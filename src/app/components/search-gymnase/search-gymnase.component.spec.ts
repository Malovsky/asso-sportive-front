import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGymnaseComponent } from './search-gymnase.component';

describe('SearchGymnaseComponent', () => {
  let component: SearchGymnaseComponent;
  let fixture: ComponentFixture<SearchGymnaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGymnaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
