<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo('admin');
        $permissions= Permission::where('name', 'like', '%Any')->get();
        $role->syncPermissions($permissions);

        $role = Role::create(['name' => 'user']);
        $role->givePermissionTo('user');
        $role->syncPermissions($permissions);

        $role = Role::create(['name' => 'student']);
        $role->givePermissionTo('student');
    }
}
