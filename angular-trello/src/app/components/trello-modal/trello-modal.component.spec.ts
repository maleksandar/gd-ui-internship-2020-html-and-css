import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloModalComponent } from './trello-modal.component';

describe('TrelloModalComponent', () => {
  let component: TrelloModalComponent;
  let fixture: ComponentFixture<TrelloModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
