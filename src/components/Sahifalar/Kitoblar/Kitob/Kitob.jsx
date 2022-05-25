import React, { useState } from "react";
import HarBirKitob from "./HarBirKitob/HarBirKitob";
import "./Kitob.css";

export default function Kitob({ setSort, newArr, setNewArr, sort }) {
  let [status, setStatus] = useState("barcha");

  // ? 

  // ? filter with buttons
  const filterHandlerId = () => {
    setNewArr(
      sort.filter((item) => {
        return item.genre === "biznes";
      })
    );
    setStatus("biznes");
  };

  const filterHandlerId1 = () => {
    setNewArr(sort.filter((item) => item));
    setStatus("barcha");
  };

  const filterHandlerId2 = () => {
    setNewArr(sort.filter((item) => item.genre === 'jahon'));
    setStatus("jahon");
  };

  const filterHandlerId3 = () => {
    setNewArr(sort.filter((item) => item.genre === "diniy"));
    setStatus("diniy");
  };

  const filterHandlerId4 = () => {
    setNewArr(sort.filter((item) => item.genre === "uzbek"));
    setStatus("uzbek");
  };

  return (
    <div className="ullamolar">
      <h1>Kitoblar</h1>

      <div className="btns-filter">
        <button
          className={`${status === "barcha" ? "temur" : null}`}
          onClick={filterHandlerId1}
        >
          Barcha kitoblar{" "}
        </button>
        <button
          className={`${status === "biznes" ? "temur" : null}`}
          onClick={filterHandlerId}
        >
          Biznes Kitoblari{" "}
        </button>

        <button
          className={`${status === "jahon" ? "temur" : null}`}
          onClick={filterHandlerId2}
        >
          Jahon Kitoblari{" "}
        </button>
        <button
          className={`${status === "diniy" ? "temur" : null}`}
          onClick={filterHandlerId3}
        >
          Diniy Kitoblar{" "}
        </button>

        <button
          className={`${status === "uzbek" ? "temur" : null}`}
          onClick={filterHandlerId4}
        >
          Uzbek Kitoblari{" "}
        </button>
      </div>
      {newArr.length === 0 && (
        <div className="non-div">
          <h1>
            <i className="bx bx-bug"></i>
          </h1>
          <h2 className="non">Sorry! Nothing to Display</h2>
        </div>
      )}

      <ul className="ul-kitob">
        {newArr.map((item, i) => (
          <HarBirKitob key={i} books={item.bookObj} />
        ))}
      </ul>
    </div>
  );
}
