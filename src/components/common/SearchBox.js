import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="form-control my-3"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
