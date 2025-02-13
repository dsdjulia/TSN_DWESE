import { Link } from "@inertiajs/react"
import ApplicationLogo from "./ApplicationLogo"


export function Footer() {
  return (
    <footer className="bg-white py-4 px-4 sm:px-6 lg:px-8 text-xs flex justify-center w-full">
    <div className="w-full max-w-4xl">
      <div className="flex justify-around">
        <div className="neomorphic-element p-4">
          <h3 className="font-semibold mb-3 text-gray-500">Enlaces Rápidos</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-900 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gray-900 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-gray-900 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gray-900 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="neomorphic-element p-4">
          <h3 className="font-semibold mb-3 text-gray-500">Contáctanos</h3>
          <p className="text-gray-400 mb-1">Calle Moderna 123</p>
          <p className="text-gray-400 mb-1">Ciudad, Estado 12345</p>
          <p className="text-gray-400 mb-1">Teléfono: (123) 456-7890</p>
          <p className="text-gray-400">Correo: info@example.com</p>
        </div>
      <div className="flex justify-center align-middle items-center">
        <ApplicationLogo />
      </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-gray-500 text-center">&copy; 2025 Nombre de tu empresa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer

