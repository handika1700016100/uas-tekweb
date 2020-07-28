import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from '../../models/login';
import { MahasiswaService } from '../../services/mahasiswa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: Login

  constructor(
    public mahasiswaService: MahasiswaService,
    public router: Router
  ) {
    this.data = new Login();
  }

  ngOnInit() {
  }

  // login() {
  //   this.mahasiswaService.login(this.data).subscribe((res) => {
  //     alert('Berhasil login');
  //     this.router.navigate(['/mahasiswa']);
  //   });
  // }

  login() {
    this.router.navigate(['mahasiswa']);
  }

  daftar() {
    this.router.navigate(['registrasi']);
  }

}
