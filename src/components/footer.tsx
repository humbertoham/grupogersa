import Image from "next/image";


import { FaFacebookF} from "react-icons/fa";


export default function Footer() {
  return (
  <>


<footer className="bg-white " id='contacto'>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image  className="logo ml-5"
                      src="./images/logo.svg"
                      alt="Hacienda El Fraile"
                      width={200}
                      height={200} />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Contácto</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="mailto:grupogersa@hotmail.com" className="hover:underline">grupogersa@hotmail.com</a>
                      </li>
                      <li className="mb-4">
                          <a href="tel:+524428985603" className="hover:underline">+52 442 898 56 03</a>
                      </li>
                      <li className="mb-4">
                          <a href="tel:+524428985608" className="hover:underline">+52 442 898 56 08</a>
                      </li>
                      <li className="mb-4">
                          <a href="tel:+524425825939" className="hover:underline">+52 442 582 5939</a>
                      </li>
                    <li  className="mb-4">
                    <div className="flex mt-4 sm:justify-left sm:mt-0">
              <a href="https://www.facebook.com/GRUPOGERSAEXTINTORES" className="text-gray-500 hover:text-gray-900 ">
                  <FaFacebookF/>
                  <span className="sr-only">Facebook</span>
              </a>
          
              
          </div>
                    </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Centro de Información</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/nosotros" className="hover:underline">Sobre Nosotros</a>
                      </li>
                     
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Información del Negocio</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/productos" className="hover:underline ">Productos</a>
                      </li>
                     
                  </ul>
              </div>
             
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2025 <a href="/" className="hover:underline">Grupo Gersa</a>. Derechos Reservados.
          </span>
         
      </div>
    </div>
</footer>


  </>
  );
}
