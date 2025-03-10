import { useState } from "react";

export default function App() {
  const [dice, setDice] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Simulador Dados KR</h1>
      <div className="w-32 h-32 flex items-center justify-center text-5xl font-bold bg-white border-4 border-gray-800 rounded-lg shadow-lg">
        {dice}
      </div>
      <button
        onClick={rollDice}
        className="mt-4 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600"
      >
        Lanzar Dado
      </button>
    </div>
  );
}
