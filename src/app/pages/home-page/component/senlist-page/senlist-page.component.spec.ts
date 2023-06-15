import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenlistPageComponent } from './senlist-page.component';

describe('SenlistPageComponent', () => {
  let component: SenlistPageComponent;
  let fixture: ComponentFixture<SenlistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenlistPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
