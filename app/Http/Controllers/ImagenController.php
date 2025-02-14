<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use Cloudinary\Asset\Image;
use Illuminate\Http\Request;
use Cloudinary\Transformation\Format;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Delivery;

class ImagenController extends Controller
{

    public function subirImagen(Request $request){
        $imagen = $request->file('imagen');
        $publicId_img = cloudinary()->upload($imagen->getRealPath(),[
            'folder' => 'prueba'
        ])->getPublicId();

        $url_image = (new Image($publicId_img))
        ->resize(Resize::scale()->width(250))
        ->delivery(Delivery::quality(35))
        ->delivery(Delivery::format(
            Format::auto()
        ));
    }
}
