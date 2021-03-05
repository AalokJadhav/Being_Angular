import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TdfFormComponent } from './tdf-form.component';

describe('TdfFormComponent', () => {
  let component: TdfFormComponent;
  let fixture: ComponentFixture<TdfFormComponent>;

  beforeEach(waitForAsync(() => {
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
