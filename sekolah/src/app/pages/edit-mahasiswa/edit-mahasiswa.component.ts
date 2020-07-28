import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mahasiswa } from '../../models/mahasiswa';
import { MahasiswaService } from '../../services/mahasiswa.service';

@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.component.html',
  styleUrls: ['./edit-mahasiswa.component.scss']
})
export class EditMahasiswaComponent implements OnInit {

  nim: number;
  data: Mahasiswa;

  constructor(
    public activatedRoute: ActivatedRoute,
    public mahasiswaService: MahasiswaService,
    public router: Router,
  ) {
    this.data = new Mahasiswa();
  }

  ngOnInit() {
    this.nim = this.activatedRoute.snapshot.params["nim"];
    //mengambil detail mahasiswa sesuai nim yang di kirim
    this.mahasiswaService.detailMahasiswa(this.nim).subscribe(res => {
      this.parseData(res);
    })
  }

  parseData(res) {
    for (var i = 0; i < res.length; i++) {
      if (res[i] != undefined) {
        this.data = res[i];
      }
    }
  }

  update() {
    //Update item by taking nim and updated data object
    this.mahasiswaService.editData(this.nim, this.data).subscribe(res => {
      this.router.navigate(['mahasiswa']);
    })
  }

}
