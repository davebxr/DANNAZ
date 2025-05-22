import React, { useState, useEffect } from 'react';

const MapaView = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 4.7324,
    lng: -74.2642
  }); // Coordenadas de Madrid, Cundinamarca
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    // Recolectores reales en Madrid, Cundinamarca
    setCollectors([
      { id: 1, lat: 4.735, lng: -74.266, status: 'Disponible', nombre: 'Recolector Norte' },
      { id: 2, lat: 4.730, lng: -74.262, status: 'En ruta', nombre: 'Recolector Centro' },
      { id: 3, lat: 4.728, lng: -74.268, status: 'Disponible', nombre: 'Recolector Sur' }
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Mapa de Recolectores - Madrid, Cundinamarca</h2>
        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
          {/* Mapa estático de Madrid, Cundinamarca */}
          <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Punto central de Madrid */}
              <div 
                className="absolute bg-red-600 w-4 h-4 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              
              {/* Recolectores */}
              {collectors.map(collector => (
                <div
                  key={collector.id}
                  className="absolute bg-blue-600 w-3 h-3 rounded-full"
                  style={{
                    top: `${50 + (collector.lat - currentLocation.lat) * 10000}%`,
                    left: `${50 + (collector.lng - currentLocation.lng) * 10000}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={`${collector.nombre} (${collector.status})`}
                ></div>
              ))}
              
              {/* Leyenda */}
              <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md text-sm">
                <div className="flex items-center mb-1">
                  <div className="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
                  <span>Tu ubicación (Madrid)</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 w-3 h-3 rounded-full mr-2"></div>
                  <span>Recolectores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recolectores Disponibles</h3>
          <ul className="space-y-3">
            {collectors.map(collector => (
              <li key={collector.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                <div>
                  <p className="font-medium text-gray-700">{collector.nombre}</p>
                  <p className="text-gray-600 text-sm">Ubicación: {collector.lat.toFixed(4)}, {collector.lng.toFixed(4)}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${collector.status === 'Disponible' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                  {collector.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapaView;