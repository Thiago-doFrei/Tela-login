import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Bem-vindo ao Sistema</h1>
      <div className="space-x-4">
        <Link to="/login" className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">
          Login
        </Link>
        <Link to="/cadastro" className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">
          Cadastro
        </Link>
      </div>
    </div>
  );
}
