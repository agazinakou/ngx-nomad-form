import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNomadFormComponent } from './ngx-nomad-form.component';

describe('NgxNomadFormComponent', () => {
  let component: NgxNomadFormComponent;
  let fixture: ComponentFixture<NgxNomadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNomadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNomadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
