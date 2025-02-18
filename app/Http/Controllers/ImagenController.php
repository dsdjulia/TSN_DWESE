<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use Cloudinary\Asset\Image;
use Illuminate\Http\Request;
use Cloudinary\Transformation\Format;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Delivery;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class ImagenController extends Controller
{

    // public function subirImagen(Request $request){
    //     $imagen = $request->file('imagen');
    //     $publicId_img = cloudinary()->upload($imagen->getRealPath(),[
    //         'folder' => 'prueba'
    //     ])->getPublicId();

    //     $url_image = (new Image($publicId_img))
    //     ->resize(Resize::scale()->width(250))
    //     ->delivery(Delivery::quality(35))
    //     ->delivery(Delivery::format(
    //         Format::auto()
    //     ));
    // }

    public function guardar(Request $request){

        // $request -> validate([
        //     'titulo' => 'required|string',
        //     'images' => 'required|array',
        //     'images.*' => 'image',
        // ]);
        $uploadedFileUrls = [];

        foreach ($request->file('images') as $image) {
            $upload = Cloudinary::upload($image->getRealPath());

            Imagen::create([
                'public_id' => $upload->getPublicId(),
                'titulo' => $request->title,
                'imagen' => $upload->getSecurePath(),
            ]);
        }

        
        // Devolver vista de muestras
    }

    public function actualizar(){

    }


}
