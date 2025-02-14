<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuarios = [
            ['name' => 'user1', 'email' => 'user1@email.com', 'password' => 'user1', 'idSede' => 1],
            ['name' => 'user2', 'email' => 'user2@email.com', 'password' => 'user2', 'idSede' => 2],
            ['name' => 'user3', 'email' => 'user3@email.com', 'password' => 'user3', 'idSede' => 3],
            ['name' => 'user4', 'email' => 'user4@email.com', 'password' => 'user4', 'idSede' => 4],
            ['name' => 'user5', 'email' => 'user5@email.com', 'password' => 'user5', 'idSede' => 5]
        ];

        foreach ($usuarios as $usuario) {
            User::create($usuario);
        }
    }
}
