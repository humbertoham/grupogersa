export const ServicesHero = () => (
    <section className="bg-gradient-to-r from-red-600 to-red-800 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Servicios Profesionales de Equipos Contra Incendios
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Venta */}
          <div className="bg-white/10 p-6 rounded-3xl flex flex-col items-center">
            <img
              src="./images/venta.jpg" // Reemplaza con la ruta correcta
              alt="Venta de equipos contra incendios"
              className="w-full h-48 object-cover rounded-3xl mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">Venta</h3>
            <p className="text-white">Equipos nuevos certificados</p>
          </div>
          {/* Recarga */}
          <div className="bg-white/10 p-6 rounded-3xl flex flex-col items-center">
            <img
              src="./images/recarga.jpg" // Reemplaza con la ruta correcta
              alt="Recarga de equipos contra incendios"
              className="w-full h-48 object-cover rounded-3xl mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">Recarga</h3>
            <p className="text-white">Servicio express con garantía</p>
          </div>
          {/* Mantenimiento */}
          <div className="bg-white/10 p-6 rounded-3xl flex flex-col items-center">
            <img
              src="./images/mantenimiento.jpg" // Reemplaza con la ruta correcta
              alt="Mantenimiento de equipos contra incendios"
              className="w-full h-48 object-cover rounded-3xl mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">Mantenimiento</h3>
            <p className="text-white">Certificaciones y soporte</p>
          </div>
        </div>
      </div>
    </section>
  );
  