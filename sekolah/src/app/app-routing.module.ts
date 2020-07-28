import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MahasiswaComponent } from './pages/mahasiswa/mahasiswa.component';
import { TambahMahasiswaComponent } from './pages/tambah-mahasiswa/tambah-mahasiswa.component';
import { EditMahasiswaComponent } from './pages/edit-mahasiswa/edit-mahasiswa.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrasiComponent } from './pages/registrasi/registrasi.component';

const routes: Routes = [
  {
    path:'mahasiswa',
    component: MahasiswaComponent
  },
  {
    path:'tambah-mahasiswa',
    component: TambahMahasiswaComponent
  },
  {
    path:'edit-mahasiswa/:nim',
    component: EditMahasiswaComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registrasi',
    component: RegistrasiComponent
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
