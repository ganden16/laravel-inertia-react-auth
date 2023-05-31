<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
	public function create()
	{
		return inertia('Auth/Register');
	}
	public function store(Request $request)
	{
		$validatedData = $request->validate([
			'name' => 'required|max:255',
			'username' => ['required', 'min:3', 'max:255', 'unique:users'],
			'email' => ['required', 'email:dns', 'unique:users'],
			'location' => ['required'],
			'password' => ['required', 'confirmed', 'min:5', 'max:255'],

		]);
		// $validatedData['password'] = bcrypt($validatedData['password']); atau
		$validatedData['password'] = Hash::make($validatedData['password']);

		User::create($validatedData);

		return redirect('/login')->with([
			'type' => 'success',
			'message' => 'Kamu Berhasil Registrasi'
		]);
	}
}
