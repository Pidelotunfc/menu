import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Bebidas",
    products: [
      { name: "Cerveza", price: 2 },
      { name: "Vino Tinto", price: 3 },
    ],
  },
  {
    name: "Tapas",
    products: [
      { name: "Tortilla de patata", price: 3.5 },
      { name: "Croquetas", price: 4 },
    ],
  },
];

export default function Menu() {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.name]: (prev[product.name] || 0) + 1,
    }));
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const count = prev[product.name] || 0;
      if (count <= 1) {
        const newCart = { ...prev };
        delete newCart[product.name];
        return newCart;
      }
      return { ...prev, [product.name]: count - 1 };
    });
  };

  const total = Object.entries(cart).reduce((acc, [productName, quantity]) => {
    const product = categories.flatMap(c => c.products).find(p => p.name === productName);
    return acc + product.price * quantity;
  }, 0);

  return (
    <div className="p-6 bg-white min-h-screen pb-28">
      <h1 className="text-3xl font-bold mb-4 text-[#009687]">Carta Digital</h1>

      {categories.map((cat) => (
        <div key={cat.name} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h2>
          <div className="grid gap-4">
            {cat.products.map((product) => (
              <motion.div
                key={product.name}
                className="flex justify-between items-center border p-3 rounded-2xl shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gray-700 font-medium">{product.name}</span>
                <span className="text-gray-500">{product.price.toFixed(2)} €</span>
                <div className="flex gap-2 items-center">
                  <Button onClick={() => removeFromCart(product)}>-</Button>
                  <span className="w-4 text-center">{cart[product.name] || 0}</span>
                  <Button onClick={() => addToCart(product)}>+</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {total > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-xl flex justify-between items-center z-50"
        >
          <span className="text-lg font-semibold text-[#009687]">Total: {total.toFixed(2)} €</span>
          <Button className="bg-[#009687] text-white hover:bg-[#007c70]">Hacer pedido</Button>
        </motion.div>
      )}
    </div>
  );
}
