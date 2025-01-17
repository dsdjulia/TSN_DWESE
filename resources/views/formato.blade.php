<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Informe</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="text-white shadow-md py-4 bg-slate-500">
        <div class="container mx-auto flex justify-between items-center px-4">
            <div class="flex items-center">
                <img src="{{asset("medac.png")}}" alt="Logo" class="h-8 w-8 mr-2">
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="/" class="hover:underline">Inicio</a></li>
                        <li><a href="/muestras" class="hover:underline">Muestras</a></li>
                        <li><a href="/contacto" class="hover:underline">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <span>Usuario: Perico Perez</span>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto mt-6 px-4 flex align-middle justify-center">
        <section class="bg-white p-6 rounded-lg shadow-md w-100">
            <h1 class="text-2xl font-bold mb-10">Nuevo Informe</h1>
            <form action="/nuevo-informe" method="POST" enctype="multipart/form-data">
                @csrf

                <!-- Código de muestra -->
                <div class="mb-4">
                    <label for="codigo" class="block text-gray-700 font-medium">Código de Muestra</label>
                    <input type="text" id="codigo" name="codigo" required
                        class="bg-slate-200 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500">
                </div>
                <hr class="mb-8 mt-8">
                <!-- Naturaleza de la muestra -->
                <div class="mb-4">
                    <label for="naturaleza" class="block text-gray-700 font-medium">Naturaleza de la Muestra</label>
                    <select id="naturaleza" name="naturaleza" required
                        class="bg-slate-200 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500">
                        <option value="">Seleccione una opción</option>
                        <option value="sangre">Sangre</option>
                        <option value="orina">Orina</option>
                        <option value="tejido">Tejido</option>
                    </select>
                </div>

                <!-- Conservación de la muestra -->
                <div class="mb-4">
                    <label for="conservacion" class="block text-gray-700 font-medium">Conservación de la Muestra</label>
                    <select id="conservacion" name="conservacion" required
                        class="bg-slate-200 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500">
                        <option value="">Seleccione una opción</option>
                        <option value="refrigerado">Refrigerado</option>
                        <option value="congelado">Congelado</option>
                        <option value="temperatura ambiente">Temperatura Ambiente</option>
                    </select>
                </div>

                <!-- Fecha de recolección -->
                <div class="mb-4">
                    <label for="fecha_recoleccion" class="block text-gray-700 font-medium">Fecha de Recolección</label>
                    <input type="date" id="fecha_recoleccion" name="fecha_recoleccion" required
                        class="bg-slate-200 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500">
                </div>

                <!-- Centro de procedencia -->
                <div class="mb-4">
                    <label for="centro_procedencia" class="block text-gray-700 font-medium">Centro de Procedencia</label>
                    <select id="centro_procedencia" name="centro_procedencia" required
                        class="bg-slate-200 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500">
                        <option value="">Seleccione un centro</option>
                        <option value="hospital_central">Hospital Central</option>
                        <option value="clinica_regional">Clínica Regional</option>
                        <option value="laboratorio_local">Laboratorio Local</option>
                    </select>
                </div>

                <!-- Subir imágenes -->
                <div class="mb-4">
                    <label for="imagenes" class="block text-gray-700 font-medium">Imágenes de la Muestra</label>
                    <input type="file" id="imagenes" name="imagenes[]" multiple accept="image/*"
                        class="bg-slate-200 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500">
                </div>

                <!-- Botón de enviar -->
                <div class="flex justify-end">
                    <button type="submit"
                        class="bg-slate-600 text-white px-4 py-2 rounded-md shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 mt-10">
                        Guardar Informe
                    </button>
                </div>
            </form>
        </section>
    </main>
</body>
</html>
