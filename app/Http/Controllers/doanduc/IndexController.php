<?php

namespace App\Http\Controllers\doanduc;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index(){
    	return view('doanduc.index.index');
    }
}
