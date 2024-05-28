import React from 'react';

const products = [
  { id: 1, name: 'Produto 1', price: 'R$ 100,00' },
  { id: 2, name: 'Produto 2', price: 'R$ 200,00' },
  { id: 3, name: 'Produto 3', price: 'R$ 300,00' },
];

const ProductList: React.FC = () => {
  return (
    <div className="p-10">
      <h3 className="text-2xl mb-6">Nossos Produtos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h4 className="text-xl mb-2">{product.name}</h4>
            <p className="text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
