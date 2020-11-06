import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrphanageComponent } from './create-orphanage.component';

describe('CreateOrphanageComponent', () => {
  let component: CreateOrphanageComponent;
  let fixture: ComponentFixture<CreateOrphanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrphanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrphanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
