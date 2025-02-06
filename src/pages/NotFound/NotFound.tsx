import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col mt-36 items-center bg-gray-50 text-gray-800">
      <div className="w-4/5 md:w-2/5 text-center p-6">
        <h2 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md">
          404
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-600 font-medium">
          Üzgünüz, aradığınız sayfa bulunamadı.
        </p>
        <button
          className="mt-6 py-3 px-8 text-neutral-850 border-2 hover:ring rounded-md duration-300 focus:outline-none"
          onClick={() => (window.location.href = '/')}
        >
          Anasayfaya Dön
        </button>
        <span className="block mt-48 text-xs text-gray-400">
          Bir sorun olduğunu düşünüyorsan{' '}
          <a href="mailto:test@example.com" className="underline hover:text-gray-600">
            test@example.com
          </a>{' '}
          adresine iletebilirsin.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
