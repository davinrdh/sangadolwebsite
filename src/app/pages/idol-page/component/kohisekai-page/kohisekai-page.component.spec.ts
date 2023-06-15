import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KohisekaiPageComponent } from './kohisekai-page.component';

describe('KohisekaiPageComponent', () => {
  let component: KohisekaiPageComponent;
  let fixture: ComponentFixture<KohisekaiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KohisekaiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KohisekaiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
