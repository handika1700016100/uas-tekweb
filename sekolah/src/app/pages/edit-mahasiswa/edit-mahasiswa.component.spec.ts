import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMahasiswaComponent } from './edit-mahasiswa.component';

describe('EditMahasiswaComponent', () => {
  let component: EditMahasiswaComponent;
  let fixture: ComponentFixture<EditMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
