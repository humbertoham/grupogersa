export const ProductGrid = () => {
    const products = [
      {
        category: "Paquete Completo (Negocio/Industrial)",
        items: [
          {
            name: "Paquete Completo",
            includes: [
              "Extintor 4.5 kg PQS",
              "Botiquín vacío",
              "Detector de Humo",
              "Soporte de pared",
              "Lámpara de emergencia 60 LED",
              "Señalética",
              "Peligro alto voltaje / riesgo eléctrico",
              "Extintor",
              "Ruta derecha",
              "Ruta izquierda",
              "Salida de emergencia",
              "Botiquín",
              "Sismos e incendios",
            ],
          },
        ],
      },
      {
        category: "Venta",
        items: [
          { name: "Extintor CO2", models: ["2kg", "4.5kg", "6kg"] },
          { name: "Extintor PQS", models: ["4.5kg", "6kg", "9kg"] },
          { name: "Extintor TIPO K", models: ["4.5kg", "6kg", "9kg"] },
          { name: "Extintor AFFF", models: ["4.5kg", "6kg", "9kg"] },
          { name: "Detector de Humo" },
          { name: "Señalética" },
          { name: "Lámpara de Emergencia", models: ["60 LED"] },
          { name: "Botiquín de Primeros Auxilios" },
          {
            name: "Kit Industrial",
            includes: ["Extintor 9kg", "Soporte", "Señalética"],
          },
        ],
      },
      {
        category: "Servicio de Recarga",
        items: [
          {
            name: "Recarga: Agente Extintor para Automóviles",
            models: ["MOD. 2, CAP. 1 KG", "MOD. 4, CAP. 2 KG"],
          },
          {
            name: "Recarga: Agente Extintor para Negocio/Industrial",
            models: [
              "INDUSTRIAL MOD. 10, CAP. 4.5 KG",
              "UNIDAD MOVIL CAP. 20 KG",
              "MOD. 15, CAP. 6 KG",
              "UNIDAD MOVIL CAP. 35 KG",
              "MOD. 20, CAP. 9 KG",
              "UNIDAD MOVIL CAP. 50 KG",
              "MOD. 25, CAP. 12 KG",
              "UNIDAD MOVIL CAP. 70 KG",
            ],
          },
          {
            name: "Recarga PQS para Automóviles",
            models: [
              "MOD. 1, CAP. 750 GR",
              "MOD. 2, CAP. 1 KG",
              "MOD. 4, CAP. 2 KG",
            ],
          },
          {
            name: "Recarga PQS para Negocio/Industrial",
            models: [
              "MOD. 10, CAP. 4.5 KG",
              "MOD. 15, CAP. 6 KG",
              "MOD. 20, CAP. 9 KG",
              "MOD. 25, CAP. 12 KG",
            ],
          },
          {
            name: "Recarga PQS Industrial",
            models: [
              "UNIDAD MOVIL CAP. 20 KG",
              "UNIDAD MOVIL CAP. 35 KG",
              "UNIDAD MOVIL CAP. 50 KG",
            ],
          },
        ],
      },
     
    ];
  
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-red-600 mb-4">
              {product.category}
            </h3>
            <div className="space-y-4">
              {product.items.map((item, idx) => (
                <div key={idx} className="border-b pb-4">
                  <h4 className="font-semibold">{item.name}</h4>
                  {item.models && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.models.map((model, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.includes && (
                    <div className="flex flex-col gap-1 mt-2">
                      {item.includes.map((inc, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  