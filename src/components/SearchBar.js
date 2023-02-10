import "./SearchBar.css"
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setItem] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) =>{
    setItem(event.target.value)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
