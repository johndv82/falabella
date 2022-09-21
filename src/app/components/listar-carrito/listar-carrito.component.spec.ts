import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarritoComponent } from './listar-carrito.component';

describe('ListarCarritoComponent', () => {
  let component: ListarCarritoComponent;
  let fixture: ComponentFixture<ListarCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
