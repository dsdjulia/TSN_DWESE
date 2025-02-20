<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void

//   PARA PRODUCCION  

    {
        Vite::prefetch(concurrency: 3);
        URL::forceScheme('https');
    }



    //pARA LOCAL
    /* {
        Vite::prefetch(concurrency: 3);
        if($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    } */
}
