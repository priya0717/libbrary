<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Permission::create(['name' => 'admin']);
        Permission::create(['name' => 'user']);
        Permission::create(['name' => 'student']);

        Permission::create(['name' => 'view']);
        Permission::create(['name' => 'create']);
        Permission::create(['name' => 'edut']);
        Permission::create(['name' => 'delete']);

        Permission::create(['name' => 'viewAny']);
        Permission::create(['name' => 'createAny']);
        Permission::create(['name' => 'edutAny']);
        Permission::create(['name' => 'deleteAny']);
    }
}
