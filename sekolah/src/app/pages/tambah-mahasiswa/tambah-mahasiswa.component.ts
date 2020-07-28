import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../models/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambah-mahasiswa',
  templateUrl: './tambah-mahasiswa.component.html',
  styleUrls: ['./tambah-mahasiswa.component.scss']
})
export class TambahMahasiswaComponent implements OnInit {

  data: Mahasiswa

  constructor(
    public mahasiswaService: MahasiswaService,
    public router: Router
  ) {
    this.data = new Mahasiswa();
  }

  ngOnInit() {
  }

  submitForm() {
    this.mahasiswaService.tambahMahasiswa(this.data).subscribe((res) => {
      alert('Berhasil Menambahkan Data Mahasiswa');
      this.router.navigate(['/mahasiswa']);
    });
  }

}
