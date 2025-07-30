import React, { useState, useRef } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const categories = ["Semua", "Sejarah", "Budaya"];

const SearchAndFilterComponent = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto mb-10 relative">
      <form className="flex">
        {/* Dropdown Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-s-full hover:bg-gray-200 focus:outline-none"
          >
            {selectedCategory} <FiChevronDown className="ml-2" />
          </button>

          {/* Dropdown List */}
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-20 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-44"
            >
              <ul className="py-1 text-sm text-gray-700">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => handleCategoryChange(cat)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari artikel sejarah..."
            className="block w-full px-5 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-e-full focus:ring-orange-400 focus:border-orange-400"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-4 text-white bg-orange-500 rounded-e-full hover:bg-orange-600"
          >
            <FiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchAndFilterComponent;
