import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageComponent } from './orphanage.component';

describe('OrphanageComponent', () => {
  let component: OrphanageComponent;
  let fixture: ComponentFixture<OrphanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
