<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'src/RestController.php';
use chriskacerguis\RestServer\RestController;

class Service extends RestController {

    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        //header('Access-Control-Allow-Origin: *');
        //header("Access-Control-Allow-Headers: Content-Type, Access, Access-Control-Request-Method, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	    //header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    }
    function status_get()
    {
        $this->response('OK',200);
    }
    function status_post()
    {
        $data=$this->post();
        $this->response($data,200);
    }
    function status_put()
    {
        $id=$this->uri->segment(3);
        $data=$this->put();
        $this->response(array('id'=>$id,'data'=>$data),200);
    }
    function status_delete()
    {
        $id=$this->uri->segment(3);        
        $this->response(array('id'=>$id),200);
    }

}