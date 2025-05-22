import React from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage }) => {
  // No renderizar el header en la página de inicio animada ni en registro
  if (currentPage === 'inicio' || currentPage === 'registro') {
    return null;
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">EcoRide</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setCurrentPage('mapa')}
                className={`text-gray-600 hover:text-green-600 transition-colors ${currentPage === 'mapa' ? 'font-semibold text-green-600' : ''}`}
              >
                Mapa
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('solicitud')}
                className={`text-gray-600 hover:text-green-600 transition-colors ${currentPage === 'solicitud' ? 'font-semibold text-green-600' : ''}`}
              >
                Solicitud
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('tips')}
                className={`text-gray-600 hover:text-green-600 transition-colors ${currentPage === 'tips' ? 'font-semibold text-green-600' : ''}`}
              >
                Tips y Videos
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('usuario')}
                className={`text-gray-600 hover:text-green-600 transition-colors ${currentPage === 'usuario' ? 'font-semibold text-green-600' : ''}`}
              >
                Usuario
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('mascota')}
                className={`text-gray-600 hover:text-green-600 transition-colors ${currentPage === 'mascota' ? 'font-semibold text-green-600' : ''}`}
              >
                Mascota
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;