<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use App\User;

use App\Http\Repositories\AuthRepository;

class AuthController extends ApiController
{


    protected $authRepository;
    protected $userService;

    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function login(Request $request)
    {
        $rules = array(
            'email'    => 'required|email',
            'password' => 'required',
        );

        $input = array(
            'email' => $request->email,
            'password' => $request->password
        );

        $validator = Validator::make($input, $rules);

        if ($validator->fails()) {
            return $this->sendError(1, "Error params", $validator->errors());
        }

        $getUserType = @$this->checkUserType($request->email);

        $credentials = array(
            'email' => $input['email'],
            'password' => $input['password'],
        );

        if (!Auth::guard($getUserType)->attempt($credentials)) {

            return $this->sendError(2, "Email atau Password Salah", (object) array());
        }

        $userType = ($getUserType == 'web' ? 'web' : 'partner');

        $user = Auth::guard($userType)->user();


        $device = $request->except(['email', 'password']);



        $success['token'] = Auth::guard($userType)->user()->createToken(Auth::guard($userType)->user()->email)->accessToken;
        $success['user_type'] = ($getUserType == 'web' ? 'user' : 'partner');
        $success['users_username'] = Auth::guard($userType)->user()->users_username;
        return $this->sendResponse(0, "Login Berhasil", $success);
    }





    public function checkUserType($email)
    {
        if (User::where('email', $email)->exists()) {
            return 'web';
        } elseif (Partner::where('email', $email)->exists()) {
            return 'partner';
        } else {
            return FALSE;
        }
    }
}
