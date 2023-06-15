import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GochikaraPageComponent } from './gochikara-page.component';

describe('GochikaraPageComponent', () => {
  let component: GochikaraPageComponent;
  let fixture: ComponentFixture<GochikaraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GochikaraPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GochikaraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
