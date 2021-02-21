<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin123')
        ]);
        $user->assignRole('admin');

        $user = User::create([
            'name' => 'Demo user',
            'email' => 'user@user.com',
            'password' => bcrypt('user123')
        ]);
        $user->assignRole('user');

        $user = User::create([
            'name' => 'Shanmuga Priya',
            'email' => 'priya@user.com',
            'password' => bcrypt('password')
        ]);
        $user->assignRole('user');
        $user->assignRole('student');
    }
}
