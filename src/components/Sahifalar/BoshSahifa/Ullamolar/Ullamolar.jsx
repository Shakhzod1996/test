import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HarBirUllamo from "./HarBirUllamo/HarBirUllamo";
import "./Ullamolar.css";

export default function Ullamolar({ newArr, setSort, setNewArr, sort }) {
  let [status, setStatus] = useState("hammasi");
  let [first, setFirst] = useState([]);

  let halfwayThrough = Math.floor(newArr.length / 8);
  
  let arrayFirstHalf = newArr.slice(0, halfwayThrough);

  useEffect(() => {
    setFirst(arrayFirstHalf)
  }, [])

  let firstPageHandler = () => {
    setFirst(arrayFirstHalf);
  };

  let secondPageHandler = () => {
    let arrayFirstHalf = newArr.slice( newArr.length);
    setFirst(arrayFirstHalf);
    console.log(first);
  };

  // ? fiter with buttons
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
    setStatus("hammasi");
  };

  const filterHandlerId2 = () => {
    setNewArr(sort.filter((item) => item.genre === "diniy"));
    setStatus("diniy");
  };

  const filterHandlerId3 = () => {
    setNewArr(sort.filter((item) => item.genre === "jahon"));
    setStatus("jahon");
  };

  return (
    <div className="ullamolar">
      <h1>ASOSIY KATEGORIYALAR</h1>

      <div className="btns-filter">
        <button
          className={`${status === "hammasi" ? "temur" : null}`}
          onClick={filterHandlerId1}
        >
          Hamma Yozuvchilar{" "}
        </button>
        <button
          className={`${status === "biznes" ? "temur" : null}`}
          onClick={filterHandlerId}
        >
          Biznes Yozuvchilari{" "}
        </button>

        <button
          className={`${status === "diniy" ? "temur" : null}`}
          onClick={filterHandlerId2}
        >
          Diniy kitob Yozuvchilari{" "}
        </button>
        <button
          className={`${status === "jahon" ? "temur" : null}`}
          onClick={filterHandlerId3}
        >
          Jahon Yozuvchilari{" "}
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

      <ul className="ul-ullamo">
        {newArr.map((item, i) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <HarBirUllamo item={item} />
            </Link>
          );
        })}
      </ul>

      <div className="pagination">
        <button onClick={firstPageHandler}>1</button>
        <button onClick={secondPageHandler}>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </div>
    </div>
  );
}
