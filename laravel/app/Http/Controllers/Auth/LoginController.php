<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function apiLogin(Request $request) {
        if (auth()->attempt($request->only(['email', 'password']))) {
            $user = auth()->user();
            $user['token'] = $user->createToken('api-login')->plainTextToken;
            return response()->json($user);
        } else {
            return response()->setStatusCode(403);
        }
    }
    public function githubLogin() {
        $user = Socialite::driver('github')->user();
        $userFromDB = User::where('email', $user['email'])->first();
        if ($userFromDB) {
            $id = $userFromDB->id;
        } else {
            $user = new User();
            $user->password = Hash::make($user['nickname']);
            $user->email = $user['email'];
            $user->name = $user['name'];
            $user->email_verified_at = Carbon::now();
            $user->save();
            $id = $user->id;
        }
        auth()->loginUsingId($id);
        return to_route("posts.index");
    }
}
