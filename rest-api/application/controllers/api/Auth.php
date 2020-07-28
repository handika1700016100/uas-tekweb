<?php 
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';
require APPPATH . 'libraries/Format.php';


class Auth extends REST_Controller  {

    public function __construct(){
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Access-COntrol-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        $method = $_SERVER['REQUEST_METHOD'];
            if($method == "OPTIONS") {
            die();
        }
        parent::__construct();
        $this->load->database();
    }

    // login
    function login_post() {
        //load model m_siswa
        $this->load->model('m_siswa');

        $nama = $this->input->post('nama');
        $nim = $this->input->post('nim');

        //cek login via model
        $where = array(
            'nama' => $nama,
            'nim' => $nim
            );
        $cek = $this->m_siswa->cek_login("data_siswa",$where)->num_rows();

        if($cek  > 0){

            $data_session = array(
                'nim'   => $nim,
                'nama'  => $nama
            );
     
            $this->response($data_session, 200);
            echo "success";
        } else {
            $this->response("error", 400);
            echo "error";
        }
    }
}
