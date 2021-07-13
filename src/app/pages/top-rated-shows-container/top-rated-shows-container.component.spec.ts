import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedShowsContainerComponent } from './top-rated-shows-container.component';

describe('TopRatedShowsContainerComponent', () => {
  let component: TopRatedShowsContainerComponent;
  let fixture: ComponentFixture<TopRatedShowsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedShowsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedShowsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
