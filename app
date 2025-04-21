import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const products = [
    { id: "1", name: "Cerveza Alhambra", price: 2.5, category: "Bebidas" },
    { id: "2", name: "Croquetas de jamón", price: 6, category: "Tapas" },
    { id: "3", name: "Tarta de queso", price: 4.5, category: "Postres" },
  ];

  const handleAdd = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 0) newCart[id]--;
      return newCart;
    });
  };

  return (
    <main className="p-4 bg-white min-h-screen">
      <header className="flex items-center justify-between mb-6">
        <Image src="/logo.png" width={140} height={40} alt="Pídelo Tú logo" />
      </header>
      <h1 className="text-2xl font-semibold mb-4 text-[#009687]">Carta Digital</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow p-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.price.toFixed(2)} €</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleRemove(product.id)}
                className="bg-[#009687] text-white w-8 h-8 rounded-full"
              >
                -
              </button>
              <span>{cart[product.id] || 0}</span>
              <button
                onClick={() => handleAdd(product.id)}
                className="bg-[#009687] text-white w-8 h-8 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-8 w-full bg-[#009687] text-white p-3 rounded-xl text-lg font-medium"
        onClick={() => alert("Pedido realizado")}
      >
        Pedir
      </button>
    </main>
  );
}
