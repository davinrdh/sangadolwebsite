import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jkt48PageComponent } from './jkt48-page.component';

describe('Jkt48PageComponent', () => {
  let component: Jkt48PageComponent;
  let fixture: ComponentFixture<Jkt48PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jkt48PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jkt48PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
