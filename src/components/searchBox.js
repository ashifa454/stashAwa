import React, { useState } from "react";
import PropTypes from "prop-types";
function SearchBox({ applyFilter }) {
  const [mode, setMode] = useState("title");
  const handleOnChange = e => {
    const { value } = e.target;
    applyFilter(mode, value);
  };
  const handleSelect = e => {
    setMode(e.target.value);
  };
  return (
    <div class="w-full">
      <div class="flex flex-wrap shadow mb-6">
        <div class="w-full px-3 md:mb-0 px-2 py-4">
          <div className="m-auto w-full block max-w-xl">
            <input
              className="appearance-none w-9/12 bg-gray-200 text-gray-700 rounded rounded-r-none py-3 px-4 leading-tight focus:outline-none focus:bg-grey-100"
              id="grid-first-name"
              type="text"
              placeholder="Search For Restaurant By"
              onChange={handleOnChange}
            />
            <select
              className="appearance-none w-3/12 bg-gray-200 text-gray-700 py-3 rounded-l-none px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-grey-100 cursor-pointer"
              onChange={handleSelect}
            >
              <option value="title">Title</option>
              <option value="country">Country</option>
              <option value="variety">Variety</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
SearchBox.propTypes = {
  applyFilter: PropTypes.func
};
export default SearchBox;
