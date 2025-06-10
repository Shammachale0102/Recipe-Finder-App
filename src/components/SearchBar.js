import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Enter ingredients (comma separated)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
