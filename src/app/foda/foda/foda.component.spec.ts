import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FodaComponent } from './foda.component';

describe('FodaComponent', () => {
  let component: FodaComponent;
  let fixture: ComponentFixture<FodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
