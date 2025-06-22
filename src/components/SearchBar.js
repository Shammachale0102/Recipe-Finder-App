// src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Enter ingredients (e.g., tomato, cheese)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
      >
        🔍 Search
      </button>
    </form>
  );
};

export default SearchBar;

