<?php

use App\Http\Controllers\Api\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\User;
use Orion\Facades\Orion;

Route::post('register', 'Auth\RegisterController@registerUser');
Route::post('login', 'Auth\LoginController@loginUser');
Route::post('logout', 'Auth\LogoutController@logoutUser');

// Route::middleware('auth:sanctum')->get('/', function (Request $request) {
//     return response()->json(['data' => 'I am logged in']);
// });

Route::group(['middleware' => ['auth:sanctum', 'role:admin|user']], function () {
    // Route::get('/userlist',function(){
    //     return response()->json(['data' => 'I am logged in admin',
    //                              'role' => Auth::user()->getRoleNames()
    //                             ]);
    // });
    Route::resource('profile', 'Admin\DashboardController');

    Orion::resource('books', 'Api\BookController');
    Orion::resource('authors', 'Api\AuthorController');
});

// Route::post('users', function (Request $request) {
//     //return response()->json(['requestUsers' => $request->all()]);
//     return response()->json(['users' => User::all(), 'status' => 200]);
// });
