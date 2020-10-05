import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfFormComponent } from './tdf-form.component';

describe('TdfFormComponent', () => {
  let component: TdfFormComponent;
  let fixture: ComponentFixture<TdfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
