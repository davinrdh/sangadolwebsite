import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamusngidolComponent } from './kamusngidol.component';

describe('KamusngidolComponent', () => {
  let component: KamusngidolComponent;
  let fixture: ComponentFixture<KamusngidolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamusngidolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamusngidolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
