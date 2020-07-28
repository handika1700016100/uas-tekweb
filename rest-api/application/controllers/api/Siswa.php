<?php 
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';


class Siswa extends REST_Controller {

    public function __construct(){
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-COntrol-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        $method = $_SERVER['REQUEST_METHOD'];
            if($method == "OPTIONS") {
            die();
        }
        parent::__construct();
    }

    // mengambil data 
    function index_get() {
        $nim = $this->get('nim');
        if ($nim == '') {
            $data_siswa = $this->db->get('data_siswa')->result();
        } else {
            $this->db->where('nim', $nim);
            $data_siswa = $this->db->get('data_siswa')->result();
        }
        $this->response($data_siswa, 200);
    }

    // mengambil detail data data_siswa
    function detail_get($nim) {
        $this->db->where('nim', $nim);
        $data_siswa = $this->db->get('data_siswa')->result();
        $this->response($data_siswa, 200);
    }

    // menambah data data_siswa baru
    function index_post() {
        $data = array(
                    'nim'           => $this->post('nim'),
                    'nama'          => $this->post('nama'),
                    'alamat'        => $this->post('alamat'),
                    'jeniskelamin'  => $this->post('jeniskelamin'));
        $insert = $this->db->insert('data_siswa', $data);
        if ($insert) {
            $this->response(array('status' => 'Berhasil Menambah Data.'), 200);
        } else {
            $this->response(array('status' => 'Gagal menambah Data.', 502));
        }
    }

    // mengubah data data_siswa
    function index_put($nim) {
        $nim = $this->put('nim');
        $data = array(
                    'nim'           => $this->put('nim'),
                    'nama'          => $this->put('nama'),
                    'alamat'        => $this->put('alamat'),
                    'jeniskelamin'  => $this->put('jeniskelamin'));
        $this->db->where('nim', $nim);
        $update = $this->db->update('data_siswa', $data);
        if ($update) {
            $this->response(array('status' => 'Berhasil Mengubah Data.'), 200);
        } else {
            $this->response(array('status' => 'Gagal mengubah Data.', 502));
        }
    }

    // hapus data_siswa
    function hapus_delete($nim) {
        $this->db->where('nim', $nim);
        $delete = $this->db->delete('data_siswa');
        if ($delete) {
            $this->response(array('status' => 'Berhasil Menghapus Data.'), 201);
        } else {
            $this->response(array('status' => 'Gagal menghapus Data.', 502));
        }
    }
}
