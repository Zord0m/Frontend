import React from 'react';

const CartaoPerfil = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="https://media.licdn.com/dms/image/D4D03AQHZdr-iVPCrwg/profile-displayphoto-shrink_200_200/0/1699294381979?e=1715212800&v=beta&t=NlYFFPlUL5LbmDjNqaskl9gus-pd5lXmf8MZwItmInc" alt="Foto Perfil" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Lucas Santiago! </div>
        <p className="text-gray-700 text-base">
            Teste para a vaga.
        </p>
      </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#react </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tailwind</span>
        </div>
    </div>
  );
}

export default CartaoPerfil;