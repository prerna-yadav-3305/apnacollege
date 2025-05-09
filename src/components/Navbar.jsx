import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Apna College</h1>
      <div>
        <button className="border px-4 py-1">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;