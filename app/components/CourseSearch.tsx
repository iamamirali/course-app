import React, { useState } from "react";

const CourseSearch = ({ getSearchResults }: { getSearchResults: any }) => {
  const [searchValue, setSearchValue] = useState("");

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const response = await fetch(`api/courses/search?name=${searchValue}`);
    const courses = await response.json();
    getSearchResults(courses);
  }

  return (
    <form onSubmit={() => {}} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search courses..."
        value={searchValue}
        onChange={onchange}
      />

      <button type="submit" className="search-button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};
export default CourseSearch;
