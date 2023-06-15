import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolPageComponent } from './idol-page.component';

describe('IdolPageComponent', () => {
  let component: IdolPageComponent;
  let fixture: ComponentFixture<IdolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
