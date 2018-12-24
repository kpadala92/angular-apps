import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklogdatatableComponent } from './worklogdatatable.component';

describe('WorklogdatatableComponent', () => {
  let component: WorklogdatatableComponent;
  let fixture: ComponentFixture<WorklogdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklogdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklogdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
