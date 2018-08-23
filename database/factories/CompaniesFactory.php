<?php

use Faker\Generator as Faker;

$factory->define(App\Company::class, function (Faker $faker) {
    return [
            'name' => $faker->lexify('???????'),
            'address' => $faker->lexify('???????'),
            'website' => $faker->lexify('???????'),
            'email' => $faker->lexify('???????')
        ];
    
});
