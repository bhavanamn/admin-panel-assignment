// src/components/SearchSort/SearchSort.js
import React, { useState } from 'react';

const SearchSort = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search users..." 
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleSortChange}>
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
        <option value="role">Sort by Role</option>
        <option value="createdAt">Sort by Creation Date</option>
      </select>
    </div>
  );
};

export default SearchSort;