<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_siswa extends CI_model {

    // fungsi simpan data register
    public function simpan_register($data) {

        return $this->db->insert("data_siswa", $data);

    }

    // fungsi cek login
    function cek_login($table, $where)
    {
        return $this->db->get_where($table,$where);
    }

}