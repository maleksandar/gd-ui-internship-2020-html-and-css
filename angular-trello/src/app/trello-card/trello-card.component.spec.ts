import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloCardComponent } from './trello-card.component';

describe('TrelloCardComponent', () => {
  let component: TrelloCardComponent;
  let fixture: ComponentFixture<TrelloCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
