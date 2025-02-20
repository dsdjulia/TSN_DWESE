<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ secure_asset('build/assets/app.css') }}">
    <script src="{{ secure_asset('build/assets/app.js') }}"></script>
    <style>
        @page {
            margin: 0cm 0cm;
            font-family: Arial, Helvetica, sans-serif;
            color: #012C55;
        }
        .page-break {
            page-break-after: always;
        }
        header {
            position: fixed;
            top: 0cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
            display: flex;
            justify-content: center;
            margin-left: 100px;
        }
        #fotoHeader{
            height: 50px;
            margin-top: 40px;
            margin-left: 2.5px;
            margin-right: 2.5px;
        }
        footer {
            position: fixed;
            bottom: 0cm;
            left: 0cm;
            right: 0cm;
            height: 2cm;
            display:flex;
            justify-content: center;
            margin-left: 175px;
        }
        #fotoFooter{
            height: 35px;
            margin-bottom: 40px;
            margin-left: 2.5px;
            margin-right: 2.5px;
        }
        body {
            margin: 3cm 2cm 2cm;
        }

        h1{
            text-align: center;
        }
        #datos {
            border-collapse: collapse; /* Unifica los bordes */
            width: 100%;
            border: 2px solid black;
        }
        #datos th, #datos td {
            border: none;
            padding: 10px;
        }
        .negrita{
            font-weight: bold;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            border: 2px solid black;
        }

        table td {
            border: 1px solid #012C55;
            padding: 10px;
        }

        #descripcion {
            border-collapse: collapse; /* Unifica los bordes */
            width: 100%;
            border: 2px solid black; /* Borde exterior */
        }

        #descripcion td {
            border-left: none; /* Elimina el borde izquierdo */
            border-right: none; /* Elimina el borde derecho */
            padding: 10px;
        }

        #descripcion tr:first-child td { /* Borde superior solo en la primera fila */
            border-top: 2px solid black;
        }

        #descripcion tr:last-child td { /* Borde inferior solo en la última fila */
            border-bottom: 2px solid black;
        }

        #imgpdf{
            margin:5px;
        }
    </style>
</head>
<header>
    <img src="{{asset('/img/medac.jpg')}}" id=fotoHeader alt="">
    <img src="{{asset('/img/fundacion.jpg')}}" id=fotoHeader alt="">
</header>
<body>

    <h1>Informe área citodiagnóstico</h1> 
    <h2>Informe del área de citodiagnóstico tipo</h2>

    <table id="datos">
        <tr>
            <td>Identificación de la muestra</td>
            <td>Fecha</td>
        </tr>
        <tr class="negrita">
            <td>{{$muestra->codigo}}</td>
            <td>{{$muestra->fecha}}</td>
        </tr>
    </table>

    <br>

    <table>
        <tr>
            <td>Tipo de muestra (órgano)</td>
            <td>{{$muestra->organo}}</td>
        </tr>
        <tr>
            <td>Recibido en </td>
            <td>{{$formato->nombre}}</td>
        </tr>
        <tr>
            <td>Tipo de naturaleza</td>
            <td>{{$naturaleza->nombre}}</td>
        </tr>
    </table>

    <br>

    <h3>Interpretaciones:</h3>

    <table id="descripcion">
        @foreach($interpretaciones as $interpretacion)
            <tr>
                <td>{{ $interpretacion->descripcion }}</td>
            </tr>
        @endforeach
    </table>

    <h3>Descripción citológica o tisular de la muestra:</h3>


    <div class="page-break"></div>

    <h3>Imágenes de la muestra</h3>

    @if(!empty($rutas))
        @foreach($rutas as $ruta)
            <div>
                <img id="imgpdf" src="{{ $ruta }}" alt="Imagen de la muestra" style="width: 400px; height: auto;">
            </div>
        @endforeach
    @endif

    
</body>

<footer>
    <img src="{{asset('/img/medac.jpg')}}" id=fotoFooter alt="">
    <img src="{{asset('/img/fundacion.jpg')}}" id=fotoFooter alt="">
</footer>
</html>