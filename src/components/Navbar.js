// src/components/Navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const handleCartClick = () => {
    console.log("Klik pada keranjang");
  };

  return (
    <nav className="bg-amazon-blue p-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        {/* Logo atau Nama Toko */}
        <div className="text-2xl font-extrabold">Sejahtera</div>

        {/* Pencarian */}
        <div className="flex items-center bg-white rounded-md p-2">
          <input
            type="text"
            placeholder="Cari produk..."
            className="border-none outline-none px-2"
          />
          <FontAwesomeIcon icon={faSearch} className="text-amazon-blue" />
        </div>

        {/* Menu Pengguna */}
        <div className="flex items-center space-x-6">
          {/* Ikon Akun Pengguna */}
          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>

          {/* Ikon Keranjang */}
          <div className="cursor-pointer relative" onClick={handleCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {/* Tambahkan elemen untuk menampilkan jumlah item di keranjang jika diperlukan */}
            <div className="bg-amazon-yellow rounded-full w-4 h-4 text-center text-black absolute top-0 right-0">
              0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
