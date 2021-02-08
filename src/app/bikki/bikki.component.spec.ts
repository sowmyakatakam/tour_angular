import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikkiComponent } from './bikki.component';

describe('BikkiComponent', () => {
  let component: BikkiComponent;
  let fixture: ComponentFixture<BikkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
