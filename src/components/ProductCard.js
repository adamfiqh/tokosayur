// src/components/ProductCard.js
import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h2 className="text-lg font-semibold mb-2">Nama Produk</h2>
      <p className="text-gray-600">Deskripsi singkat produk.</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-800 font-semibold">Rp 100.000</span>
        <button className="bg-amazon-yellow text-white px-4 py-2 rounded-md">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
