import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Kitob from "./Kitob/Kitob";
import "./Kitoblar.css";
import Search from "./Search/Search";

export default function Kitoblar({ setSort, newArr, setNewArr, sort }) {

  let [searchText, setSearchText] = useState("");
  const excludeColumns = [
    "id",
    "bornDate",
    "bornMonth",
    "userImg",
    "desc",
    'died',
    'books',
    'audio',
    'jobs',
    'location',
    'bookObj'
  ];

  let handleChange = (value) => {
    setSearchText(value);
    filteredData(value);
  };

  let filteredData = (value) => {
    const lowerCasedValue = value.toLowerCase().trim();
    if (!lowerCasedValue) {
      setNewArr(newArr);
    } else {
      const filterData = newArr.map((item) => {
        return Object.keys(item).some((key) => {
          return excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowerCasedValue);
        });
      });
      setNewArr(filterData);
    }
  };
  return (
    <div className="kitoblar">
      <Hero />
      <Search handleChange={handleChange} searchText={searchText}  />

      <Kitob
        setSort={setSort}
        newArr={newArr}
        setNewArr={setNewArr}
        sort={sort}
      />
    </div>
  );
}
