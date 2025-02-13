import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        idSede: "1",
    });

    const sedes = [
        { nombre: "Albacete", codigo: "1" },
        { nombre: "Alicante", codigo: "2" },
        { nombre: "Alicante II", codigo: "3" },
        { nombre: "Almería", codigo: "4" },
        { nombre: "Córdoba", codigo: "5" },
        { nombre: "Leganés", codigo: "6" },
        { nombre: "Granada", codigo: "7" },
        { nombre: "Huelva", codigo: "8" },
        { nombre: "Jerez", codigo: "9" },
        { nombre: "Madrid", codigo: "10" },
        { nombre: "Málaga", codigo: "11" },
        { nombre: "Murcia", codigo: "12" },
        { nombre: "Sevilla", codigo: "13" },
        { nombre: "Valencia", codigo: "14" },
        { nombre: "Zaragoza", codigo: "15" },
    ];

    const submit = (e) => {
        e.preventDefault();
        console.log(data); // Esto mostrará los datos antes de enviarlos
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
        localStorage.setItem('usuarioActivo', JSON.stringify(data))
        const usuario = JSON.parse(localStorage.getItem('usuarioActivo'))
        console.log(usuario)
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmar contraseña"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="idSede"
                        value="Sede Medac"
                        className="mt-4"
                    />
                    <select
                        id="idSede"
                        type="idSede"
                        name="idSede"
                        autoComplete="1"
                        onChange={(e) => setData("idSede", e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="" disabled>
                            Seleccione una opción
                        </option>
                        {sedes.map((sede) => (
                            <option key={sede.codigo} value={sede.codigo}>
                                {sede.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route("login")}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar Usuario
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
