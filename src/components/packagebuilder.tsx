import { useState } from 'react';
import Select, { MultiValue } from 'react-select';

interface OptionType {
  value: string;
  label: string;
  price: number;
}

export const PackageBuilder = () => {
  // Opciones con precio asignado a cada artículo
  const options: OptionType[] = [
    { value: 'extintor_co2', label: 'Extintor CO2', price: 2000 },
    { value: 'extintor_pqs', label: 'Extintor PQS (Polvo Químico Seco)', price: 1850 },
    { value: 'extintor_tipok', label: 'Extintor TIPO K', price: 2200 },
    { value: 'extintor_afff', label: 'Extintor AFFF', price: 2100 },
    { value: 'detector_humo', label: 'Detector de Humo', price: 500 },
    { value: 'senaletica', label: 'Señalética', price: 300 },
    { value: 'lampara_emergencia', label: 'Lámpara de Emergencia', price: 800 },
    { value: 'botiquin', label: 'Botiquín de Primeros Auxilios', price: 400 },
  ];

  // Se tipa el estado para que sea un arreglo de OptionType
  const [selectedItems, setSelectedItems] = useState<OptionType[]>([]);

  // Se tipa el parámetro como MultiValue<OptionType>
  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedItems(selected as OptionType[]);
  };

  // Cálculo del total sumando los precios de los artículos seleccionados
  const total = selectedItems.reduce((acc, item) => acc + item.price, 0);

  // Número de WhatsApp. Cámbialo según sea necesario.
  const whatsappNumber = "521442582593";

  // Se arma el mensaje predefinido con la lista de artículos y su precio
  const prefilledMessage = `Hola, me gustaría solicitar una cotización para el siguiente paquete:\n\n${selectedItems.map(item => `${item.label} - $${item.price} MXN`).join('\n')}\n\nTotal: $${total.toFixed(2)} MXN`;

  // URL de WhatsApp con el mensaje predefinido
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Arma tu Paquete</h2>
      <div className="space-y-6">
        <Select<OptionType, true>
          isMulti
          options={options}
          onChange={handleChange}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Selecciona los elementos..."
        />
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total estimado:</span>
            <span className="text-xl font-bold text-red-600">${total.toFixed(2)} MXN</span>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
              Solicitar Cotización
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
