<?php

namespace App\Http\Controllers\Api\user;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

use Validator;

class RegisterController extends ApiController
{




    public function registerUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|unique:users',
            'username' => 'required|string',
            'users_hp' => 'required|string',
            'password' => 'required|min:8',
            'password_confirmation' => 'required_with:password|same:password|min:8',

        ]);

        if ($validator->fails()) {
            $validate = validationMessage($validator->errors());
            return $this->sendError(1, 1, $validate);
        }



        $thisData = [
            'users_code' => generateFiledCode('USERS'),
            'users_username' =>  $request->username,
            'users_phone' =>  $request->users_hp,
            'email' =>  $request->email,
            'password' => Hash::make($request->password,),
            'users_type' =>  1,
        ];

        // dd($thisData);

        try {

            $insertRegis = DB::table('users')->insert($thisData);


        } catch (\Exception $e) {

            return $this->sendError(2, "Gagal Registrasi", (object) array());
        }

        return $this->sendResponse(0, "Berhasil Registrasi");
    }
}
