import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsTodosComponent } from './lists-todos.component';

describe('ListsTodosComponent', () => {
  let component: ListsTodosComponent;
  let fixture: ComponentFixture<ListsTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
