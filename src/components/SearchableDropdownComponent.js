import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchableDropdownComponent = ({
  items = [],
  onItemSelect,
  placeholder = "Search...",
  containerStyle = "",
}) => {
  const [filteredItems, setFilteredItems] = useState([items]);
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Format the initial items list when the component mounts or when items change
  useEffect(() => {
    if (items && items.length > 0) {
      setFilteredItems(
        items.map((item) => ({
          id: item.id,
          name: `${item.name} - ${item.phone}`,
          originalItem: item,
        }))
      );
    }
  }, [items]);

  // Handle input text change and filter the items
  const handleTextChange = (text) => {
    setSearchText(text);
    setIsDropdownOpen(true); // Open the dropdown when user starts typing

    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.phone.includes(text)
    );
    setFilteredItems(filtered);
  };

  // Handle selection of an item
  const handleItemSelect = (item) => {
    setSearchText(`${item.name} `); // Set input value to the selected item
    setIsDropdownOpen(false); // Close the dropdown after selecting an item
    // setFilteredItems([]); // Clear the filtered items

    onItemSelect && onItemSelect(item.originalItem); // Pass the original item to the onItemSelect callback
  };

  return (
    <div className={`relative w-full max-w-md ${containerStyle}`}>
    
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleTextChange(e.target.value)}
          onClick={() => setIsDropdownOpen(true)}
          placeholder={placeholder}
          className="w-full p-2 pr-10 pl-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-3 text-gray-400"
          size="lg"
        />
      </div>

      {isDropdownOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredItems ? (
            filteredItems.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => handleItemSelect(item)}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdownComponent;
