import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaywonPageComponent } from './saywon-page.component';

describe('SaywonPageComponent', () => {
  let component: SaywonPageComponent;
  let fixture: ComponentFixture<SaywonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaywonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaywonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
