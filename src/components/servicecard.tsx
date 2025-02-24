import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const ServiceCard = ({ title, items, time, warranty, max }: {
  title: string;
  items: string[];
  time?: string;
  warranty?: string;
  max?: string;
}) => (
  <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-2xl font-bold text-red-600">{title}</h2>
      {time && (
        <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm">
          ⏱️ {time}
        </span>
      )}
    </div>
    
    <ul className="space-y-3 mb-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
          {item}
        </li>
      ))}
    </ul>

    {(warranty || max) && (
      <div className="border-t pt-4">
        {warranty && <p className="text-sm">🔖 Garantía: {warranty}</p>}
        {max && <p className="text-sm">📌 {max}</p>}
      </div>
    )}
  </div>
);