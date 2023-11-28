import React from "react";

function Search({ query, setQuery }) {
  return (
    <div className="searchWraper">
      <input
        id="foodSearch"
        type="text"
        placeholder="Search by food or recipe.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      {/* <button id="submitFoodSearch">Pretraži</button> */}
    </div>
  );
}

export default Search;
