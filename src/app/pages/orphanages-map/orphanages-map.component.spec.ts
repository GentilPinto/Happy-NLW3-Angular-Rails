import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanagesMapComponent } from './orphanages-map.component';

describe('OrphanagesMapComponent', () => {
  let component: OrphanagesMapComponent;
  let fixture: ComponentFixture<OrphanagesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanagesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrphanagesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
