<?php

namespace App\Http\Repositories;

use App\User;
use App\Partner;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Users;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthRepository
{
    public function getValidationRegisterAsUser($request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'users_hp' => 'required',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:8',
            'password_confirmation' => 'required_with:password|same:password|min:8'
        ]);
        return $validator;
    }


    public function insertRegisterAsUser($request)
    {
        $user = new User([
            'users_code' => generateFiledCode('USERS'),
            'users_name' => $request->name,
            'users_hp' => $request->users_hp,
            'email' => $request->email,
            'users_password' => bcrypt($request->password)
        ]);

        return $user->save();
    }
}
