import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinervaPageComponent } from './minerva-page.component';

describe('MinervaPageComponent', () => {
  let component: MinervaPageComponent;
  let fixture: ComponentFixture<MinervaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinervaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinervaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
